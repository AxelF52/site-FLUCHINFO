#include <SoftwareSerial.h>
#include <DFRobotDFPlayerMini.h>
#include <Servo.h>

SoftwareSerial mySoftwareSerial(10, 11);
DFRobotDFPlayerMini dfPlayer;

int previousTrack = -1;
unsigned long trackStartTime;
unsigned long trackDuration;
unsigned long lastMotorMoveTime = 0;
bool motorPosition = false; // false = 0°, true = 91°

const int trackMapping[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
const unsigned long trackDurations[] = {23, 8, 8, 45, 29, 50, 16, 37, 30}; // en secondes
const int totalTracks = sizeof(trackMapping) / sizeof(trackMapping[0]);

Servo motor1;

const int ledPin1 = 2;
const int ledPin2 = 3;
const int motorPin1 = 5;

void setup() {
    Serial.begin(115200);
    mySoftwareSerial.begin(9600);
    
    if (!dfPlayer.begin(mySoftwareSerial)) { 
        Serial.println("Erreur DFPlayer !");
        while (true); 
    }
    
    dfPlayer.volume(30);
    randomSeed(analogRead(0));

    pinMode(ledPin1, OUTPUT);
    pinMode(ledPin2, OUTPUT);
    motor1.attach(motorPin1);
    
    motor1.write(90);  // Position initiale à 0°
    
    playNewTrack();  // Lancer le premier son immédiatement
}

void loop() {
    // Vérifier si la piste est terminée et en lancer une nouvelle
    if (millis() - trackStartTime >= trackDuration) {
        playNewTrack();
    }
    
    // Animer les LEDs et le moteur pendant la lecture
    randomLEDs();
    moveMotor1();
    
    delay(100);  // Petite pause pour éviter une surcharge du processeur
}

void playNewTrack() {
    int index;
    do {
        index = random(0, totalTracks);  // Choisir une piste aléatoire
    } while (trackMapping[index] == previousTrack);  // S'assurer de ne pas répéter la même piste

    previousTrack = trackMapping[index];
    dfPlayer.play(previousTrack);  // Jouer la nouvelle piste
    trackDuration = trackDurations[index] * 1000;  // Convertir en millisecondes
    trackStartTime = millis();  // Mettre à jour le temps de début de la lecture
}

void randomLEDs() {
    digitalWrite(ledPin1, random(0, 2));  // Allumer ou éteindre LED 1 aléatoirement
    digitalWrite(ledPin2, random(0, 2));  // Allumer ou éteindre LED 2 aléatoirement
}

void moveMotor1() {
    // Faire bouger la tête toutes les 5 secondes
    if (millis() - lastMotorMoveTime >= 15000) {  // 5000 millisecondes = 5 secondes
        motorPosition = !motorPosition;  // Inverser la position
        motor1.write(motorPosition ? 80 : 110);  // Passer à 91° ou revenir à 0°
        lastMotorMoveTime = millis();  // Mettre à jour le temps du dernier mouvement
    }
}

