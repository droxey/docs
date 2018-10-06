# ender 3

## Specs

- Modeling Technology：FDM (Fused Deposition Modeling）
- Printing Size：220*220*250mm 
- Machine Size：440*410*465mm 
- Package weight：8kg Max 
- Traveling Speed：180mm/s 
- Filament：1.75mm PLA,TPU,ABS 
- **Input：AC 100-265V 50-60Hz**
- **Output：DC 24V 15A 360W**
- Layer Thickness：0.1-0.4mm 
- Nozzle diameter：0.4mm 
- Precision：±0.1mm 
- File Format：STL,OBJ,G-Code 
- Working Mode：Online or SD offline 
- Max Nozzle Temperature：255℃ 
- Max Hot bed Temperature：110℃

---

## Add BLTouch 

![img](https://i1.wp.com/3dprintlove.com/wp-content/uploads/2018/07/Bl-touch-1.png?resize=640%2C516)

I started out by flashing TH3 Studio’s universal firmware but that did not give me what I needed. The
flashing went well but I could only seem to install bed leveling if I was using his EZABL which was not
something I wanted to do. So I was forced to download a clean coppy of Marlin off of Github and do all of
the configuring myself.

I have not had to do this in well over a year so it was very tedious and time consuming. However, in the
end I have an Ender 3 with a BlTouch installed that has been printing beautifully for at least a month now
with perfect first layers. I will go ahead and save you the pain and upload my version of Marlin that can
be found [here](https://drive.google.com/open?id=1WFKypHUEvy7Z0uNaQ8DegLiWUV1cMkKT). Now if you want to use the same setup as me you can just flash it over without having to
manually do all of the configuration.

Hoping this will help some of you. It will be very similar for the Ender 2 as well and my Marlin file might
be a good starting point on that.

If your Z offset after flashing over my version of Marlin to your Ender 3 is not where you want it, I found a great video guide on how to adjust it [here](https://www.youtube.com/watch?v=y_1Kg45APko&t=276s).

Hoping this will help save at least a good chunk of time for those that want to do this upgrade.

This is definitely an awesome upgrade that was worth the time.

### Marlin Configuration

`configuration.h* ---line 699---(offset)`

```c++
#define X_PROBE_OFFSET_FROM_EXTRUDER -39  // X offset: -left  +right  [of the nozzle]
#define Y_PROBE_OFFSET_FROM_EXTRUDER 14  // Y offset: -front +behind [the nozzle]
#define Z_PROBE_OFFSET_FROM_EXTRUDER 0   // Z offset: -below +above  [the nozzle]
define X_MIN_POS 0
define Y_MIN_POS 0
define Z_MIN_POS 0
define X_MAX_POS X_BED_SIZE
define Y_MAX_POS Y_BED_SIZE
define Z_MAX_POS 400
---line 877---(Probe boundaries)
define LEFT_PROBE_BED_POSITION 40
define RIGHT_PROBE_BED_POSITION 240
define FRONT_PROBE_BED_POSITION 30
define BACK_PROBE_BED_POSITION 260
```

### Additional Comments

If you have a look at the comments by Taaqif Peck
at <https://www.youtube.com/watch?v=KoCvwPZUkBI> he shows some config changes for the TH3D firmware that removes some functions from being controlled by the LCD that allows the BLTouch and SD card to both be available at the same time.

---

Awesome information. Thanks for the wiring diagram and the Marlin code. Super helpful!

Also, FYI. the M48 command is not enabled in your firmware version. That command allows you to test the repeatability of the BLTouch. If you want it enabled uncomment…
\#define Z_MIN_PROBE_REPEATABILITY_TEST

I did find that the compile was too large if you enable M48 and the SDCard (#define SDSUPPORT), so I just disabled the SDCard for testing.

---

