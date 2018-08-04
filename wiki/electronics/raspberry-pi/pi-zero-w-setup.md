<!-- TITLE: Headless Pi Zero W Setup -->
<!-- SUBTITLE: Setting up Pi Zero OTG -->

# Headless Pi Zero W Setup

## Headless Configuration (no keyboard, mouse, or monitor)

> More details - http://blog.gbaman.info/?p=791

For this method, alongside your Pi Zero, MicroUSB cable and MicroSD card, only an additional computer is required, which can be running Windows (with Bonjour, iTunes or Quicktime installed), macOS, or Linux (with Avahi Daemon installed, for example Ubuntu has it built in).

1. **Format the SD card** with `SDFormatter.app`.
1. **Flash Raspbian** onto the SD card via `Etcher.app`.
1. Once the OS is flashed, **open the boot partition**, and **add to the bottom** of `config.txt`: `dtoverlay=dwc2`, then **save**.
1. In the **root of the SD card**, `touch ssh` to **enable SSH**.
1. Finally, **open** `cmdline.txt`. **_Be careful with this file, it is very picky with its formatting!_** Each parameter is seperated by a single space (it does not use newlines). **Insert** `modules-load=dwc2,g_ether` **after** `rootwait`.
1. **Eject the SD card** from your computer, then **put it in your Raspberry Pi Zero**. **Connect the pi via USB** to your computer. It will take up to 90 seconds to boot up (shorter on subsequent boots).
1. It should then **appear as a USB Ethernet device** in `System Preferences` -> `Network`.
1. You can **SSH into it** using `raspberrypi.local` as the address: `ssh -p 22 pi@raspberrypi.local`.

## Security

1. **Update the password** by running `passwd`.
1. On your host machine, run `ssh-copy-id -i ~/.ssh/id_rsa.pub pi@raspberrypi.local -p 22` to **enable key-based authentication**.
