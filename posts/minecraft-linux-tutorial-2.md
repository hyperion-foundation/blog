---
title: How to host a Minecraft server on Ubuntu/Debian - Part 2
publish_date: 2023-12-27
---

Hello again!

In this post, we want to continue the tutorial. We assume if you already finished all things from the Part 1 post.

Now, let's continue, shall we?

Fourth, you need to setup a firewall first. This can be done by using **Uncomplicated Firewall** package or UFW for short.

> *Setting up a firewall also can be done using* ***iptables****, but using that feature is more complicated.* ***UFW*** *is the easier method to setup a firewall and we recommend to use this feature.*

If you are using Ubuntu for your operating system, UFW is already installed by default, but if you are using Debian, you need to install UFW by yourself, because Debian does not install UFW by default.

To install `ufw`, you can run this command: 

```shell
sudo apt install ufw -y
```

Once the `ufw` is installed, now, you need to open the Minecraft server access port for your server.
Let's open the default of the Minecraft server port, `25565` (TCP). Try to type: 

```shell
sudo ufw allow 25565/tcp
```

> *For security purposes, we recommend to use another TCP port number for your Minecraft server.*

Once finished, now, you can create a folder/directory to store every Minecraft server files.
```shell
mkdir <folder name>
```

Example: 

```shell
mkdir minecraft
```

> *Creating a folder/directory is just to make everything look tidier.*

Fifth, you need to download the Minecraft server JAR file.

```shell
wget https://piston-data.mojang.com/v1/objects/8dd1a28015f51b1803213892b50b7b4fc76e594d/server.jar
```

> *You are about to download the Minecraft server JAR file version* ***1.20.4****. If you wish to download the other version of it, you can download it from your Minecraft Launcher.*

After you finish download the JAR file, now, you need to run the JAR file first to accept the Mojang EULA. It can be done by running this command: 

```shell
java -Xms1024 -Xmx1024 -jar server.jar nogui
```

You will be given an output something like this: 

```shell
[ServerMain/ERROR]: Failed to load properties from file: server.properties
...
[ServerMain/WARN]: Failed to load eula.txt
[ServerMain/INFO]: You need to agree to the EULA in order to run the server. Go to eula.txt for more info.
```

That means you need to accept/agree to Mojang EULA. Now, you need to edit the `eula.txt` file to accept the EULA.

```shell
nano eula.txt
```

Once you type that command, now you are in a text editor mode using `nano`. You only need to change this part: 

```shell
eula=false
```

to

```shell
eula=true
```

Done editing? Now, you must save it. To save the file, go press `Ctrl` + `X` then `Y` and then lastly `Enter` on your keyboard.
If you want to check what files that just been created, go type: 

```shell
ls -lh
```

> *`ls` is a command to list the folder/directory contents of files and directories. `-lh` is an `ls` option. The `-l` option is to display detailed information about files and directories, and `-h` option is to print file sizes in human-readable format (e.g. 1K, 15M, 2G).*

There is a file named `server.properties`. That file purposely made to configure your Minecraft server (e.g. change the server port, change the world name, etc). If you really don't know anything about that, you don't need to change/edit anything.

Sixth, you need to run the JAR file once again to create the server world.

```shell
java -Xms5G -Xmx5G -jar server.jar --nogui
```

> *We assume if your server has* ***6 GB*** *or more of RAM. Do NOT use this JVM argument if your RAM server is under ***6 GB***.*

Once you run the command, you need to wait until it finish. 

When the world generation finish? You will be given an output something like this: 

```shell
[ServerMain/INFO]: Time elapsed: 56367 ms
[ServerMain/INFO]: Done (68.661s)! For help, type "help"
```

> *Sometimes the world generation may take longer, because due to your server CPU performance issue or your server hard drive issue. We recommend you to use an SSD for your server storage. SSD is more faster for reading/writing rather than conventional hard drive.*

> *And also, when you order a virtual machine from vendors, do not forget to choose the ***Dedicated CPU*** type. We don't recommend you to choose a virtual machine ***Shared CPU*** type.*

> *"Dedicated CPU Droplets have guaranteed access to the full hyper-thread at all times. With shared CPU Droplets, the hyper-thread allocated to the Droplet may be shared between multiple other Droplets. When a shared CPU Droplet experiences heavier load, the hypervisor dynamically allocates more hyper-thread(s) to it." An explanation about Dedicated and Shared CPU from [DigitalOcean](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/).*

To stop the server, just press `Ctrl` + `C` on your keyboard.

And that is the end of the tutorial! Just to remind you, when the Minecraft server is running and you close your current terminal/SSH, your Minecraft server will be stopped running. 

To make it run 24/7 (non-stop), you need to install one more package, that is `screen`. `screen` is a terminal multiplexer, which means you can start another screen session from a single SSH session. 

If you want your Minecraft server running 24/7, you can follow this tutorial for little bit more.

First, you need to install the `screen` package.

```shell
sudo apt install screen -y
```

> *If you are using Debian, `screen` package is already installed and you don't need to run that command. If you want to check if the `screen` package is already installed or not, just run `screen -h` command.*

Once finished, now, you create one screen session.

```shell
screen -S <screen session name>
```

Example:

```shell
screen -S minecraft
```

> *The `-S` argument is to add the screen session name.*

Now, you should be in the `minecraft` screen session. You can run your Minecraft server again with the JVM argument we told you before.

```shell
java -Xms5G -Xmx5G -jar server.jar --nogui
```

To detach from the `minecraft` screen session, press `Ctrl` + `A` + `D`. To reattach, type: 

```shell
screen -r <screen session name>
```

Example:

```shell
screen -r minecraft
```

That's it! Now your Minecraft server is running 24/7 (non-stop)! Well, if there is no disruption from your server vendor, your Minecraft server should be running non-stop.

Thanks for following this tutorial and we hope this tutorial helps you. Please share this tutorial to your colleagues if you think this tutorial is great for beginners.

We will try to create more tutorials that suits for beginners.

> *If there are wrong grammar on this post or from previous post, we're sorry and we will try to fix it as soon as possible.*