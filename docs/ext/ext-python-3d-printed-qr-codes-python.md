# 3D Printed WiFi Access QR Codes: Part 1

### Summary

Over the weekend, I embarked on a project to create a 3D printed QR code that guests at our house could scan to gain access to our guest wireless network. Why 3D you might ask? Well, that’s how geeks like myself like to impress their guests! Also, let’s be real, I have a 3D printer at home, and I was looking for a fun way to put it to practical use. It turns out that it makes for some nice wall artwork as well.

In this first blog post I detail how I generate a QR code using Python, then how to build 3D printable blocks and, finally, how to convert that model into a file 3D printers can read.

In a follow-up blog post, I will specify how I created a hybrid command line app and Flask app from the same code base, using click and Flask. It will take the code that we write here and turn it into an app that can be used from the command line and from a web interface -- it's a great exercise in showing the similarities between the CLI and Flask. Coming soon!

### Why a 3D QR code for my WIFI password?

There are a ton of QR code generators out there on the web and more than a handful of WiFi QR code generators too - so why did I embark on this project? Mainly, it was me wanting to scratch my itch surrounding QR codes. The last time I went to China (Xi’an and Shanghai, specifically), I saw QR codes everywhere. There surely had to be something good we could use this for at home that didn’t involve just packing and storage. Now that I know how simple it is to create a QR code using Python, I’m sure I’ll find myriad uses for them!

### Getting Set Up

Ok, let’s get started! To create QR codes, you need to install pyqrcode and pypng in your environment:

```bash
pip install pyqrcode
pip install pypng
```

If you want to do the 3D printing part, you’ll also need to install SolidPython and NumPy:

```bash
pip install SolidPython
pip install numpy
```

Finally, to build a command line app and a web app, you’ll need to install click and Flask:

```bash
pip install click
pip install Flask
```

If you are using the conda package manager, you should know that numpy, click and Flask are conda-installable if you prefer to do so.

I also used [Kite](https://kite.com/) in the Atom text editor: this allowed me to view documentation and common usage patterns for the packages I imported.

### Step 1: Encoding WiFi credentials in a QR code

Let’s start by creating a QR code for our WiFi guest network.

Let’s say that these are the security credentials for the network:

```bash
SSID (a.k.a. Network Name): Family Guest Network
Password: vn8h2sncu093y3nd!
Security Type (one of WPA or WEP): WPA
```

QR codes are merely two-dimensional barcodes that encode a string that can be parsed by another program. In order to create a QR-code that is readable for accessing WiFi, we need a string that can be parsed by our devices. This string is structured as follows:

```bash
WIFI:S:<SSID>;T:<WPA|WEP|>;P:<password>;;
```

So in our case, we would want a string that looks like:

```bash
WIFI:S:Family Guest Network;T:WPA;P:vn8h2sncu093y3nd!;;
```

Now, we can code up our Python program to encode the QR code for us. I’ll assume you’re running Python 3.6 or later.

```python
import pyqrcode as pq
ssid = "Family Guest Network"
security = "WPA"
password = "vn8h2sncu093y3nd!"
qr = pq.create(f'WIFI:S:{ssid};T:{security};P:{password};;')
print(qr.terminal())
```

With that block of code, you should get a QR code printed to your terminal, just like that!

Let’s say you wanted to do the simple thing, and just have a regular laser/inkjet printer make a printout of the QR code. To do so, you can save the QR code to disk as a PNG file:

```python
qr.png('home_guest_wifi.png')
```

And just like that, you’ve used Python to create a WiFi QR code! Just scan this code using your phone’s camera and you (or your guests) will be able to join your WiFi network.

Now, if you remember that QR codes are just “ASCII strings encoded in a 2D barcode”, then you’ll know that you can pass any arbitrary string into the pyqrcode.create() function. That means you can come up with any creative use of a short string that would make sense to scan with your phone! For example, you can create business cards with your LinkedIn profile URL embedded in the QR code, use it to encode a serial number information on your possessions, or more!

Next, we’ll turn the QR code into a 3D-printable model using our imported Python packages and free online CAD software.

### Step 2: 3D Printing a QR Code

For this, we will need a package called SolidPython, and optionally numpy to help us with some array processing (it can also be done entirely using built-in lists if needed).

To start, I defined a convenience function that let me create and return a QRCode object that can be passed around and manipulated.

```python
def create_wifi_qr(ssid: str, security: str, password: str):
    qr = pq.create(f'WIFI:S:{ssid};T:{security};P:{password};;')
    return qr
```

Its use will become evident later. You’ll also notice that I’m using type hints inside the function.

#### Create Text Representation

Using this function, we can create a text representation of the QR code:

```python
qr = create_wifi_qr(ssid, security, password)
print(qr.text())
```

This will essentially give a series of 1s and 0s. This is a string, though, not a numpy array. Hence, we may have to convert this into a list of lists, or a numpy array (as a user of the scientific Python stack, I prefer using arrays where possible, but in this case there is no real practical advantage to doing so because we are not doing linear algebra).

#### Create Array Representation

Let’s now define a function that takes in the QRCode object and returns an array version of the text rendering.

```python
def qr2array(qr):
    arr = []
    for line in qr.text().split('
'):
        if len(line) != 0:
            arr.append([int(bit) for bit in line])
    return np.vstack(arr)
```

With that, we can create an array version of our QR code above:

```python
arr = qr2array(qr)
```

#### Create 3D Model

Now, we’re ready to play with SolidPython!

SolidPython is a Python package that provides an interface to the OpenSCAD language. OpenSCAD allows a programmer to programmatically define 3D models using the language of geometry. This includes the creation of cubes and other 3D objects, as well as object manipulations, such as translation, coloring, and union-ing.

Take a look at the code below for an example of how we create the 3D object.

```python
from solid import color, cube, scad_render, translate, union

SCALE = 2  # output defaults to 1 mm per unit; this lets us increase the size of objects proportionally.
cubes = [translate([i*SCALE, j*SCALE, 0])(color('black')(cube(size=[SCALE, SCALE, HEIGHT])))
        for i, row in enumerate(arr)
        for j, col in enumerate(row)
        if arr[i, j] == 1]

base_plate = color('white')(cube(size=(arr.shape[0] * SCALE, arr.shape[1] * SCALE, HEIGHT / 2)))
qrobj = union()(*cubes, base_plate)

print(scad_render(qrobj))
```

What we’re doing here is taking the 1s and creating cubes where they are supposed to be, but leaving the zeros empty. Then, we add a “base plate” so that everything stays nice and connected, and finally union all of the cubes with the base plate, so that we get one solid piece that is 3D printed.

If you observe the output of the function scad_render, it will essentially be valid OpenSCAD text. Once you download the free software [here](https://openscad.org/), you can paste our function’s output into OpenSCAD to render and export as an STL file. The STL file then needs to be converted into a .gcode file, which gives a 3D printer the necessary instructions to move its printhead around to print the QR code.

In short, the flow is:

```bash
SolidPython -> OpenSCAD -> STL -> .gcode
```

That’s it! You have everything you need to 3D print a QR code of your WiFi credentials.

### Conclusions

The key takeaways from this blog post are:

1. How to create a QR code using Python.
2. How to create a text representation of the QR code.
3. How to convert the text representation into an array.
4. How to create a 3D model of the QR code using the array.

Now that you have a rendered 3D model, you can either 3D print it at home, or send it to a friend to 3D print it for you. You’ll no longer have to give plain text WiFi passwords to your guests - they can just scan the aesthetically-pleasing 3D printed QR code instead!

With this example of how to create an OpenSCAD file from Python using SolidPython, I hope you’ll go forth and make a ton of fun stuff! Please share your experiences in the comment section below.

In my next post, I’ll show how I took this code base to create a hybrid command line app and Flask app. Stay tuned for more details and make sure to subscribe to the Kite blog so you don’t miss it!
