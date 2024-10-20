gcc -c *.c `pkg-config sdl2 --cflags`
gcc -o PayCrisis.exe *.o -lSDL2 -lGL -lm
