---
title: How to host a Minecraft server on Ubuntu/Debian - Part 1
publish_date: 2023-12-26
---

Hello!

In this post, we want to give you a tutorial about how to host a Minecraft server on Ubuntu/Debian. This tutorial is about **Minecraft: Java Edition**, not the **Bedrock Edition**.

First, you need a Ubuntu/Debian server (*of course*). You can order a virtual machine from [DigitalOcean](https://www.digitalocean.com/?refcode=83d8f1ab6d04&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge). For  the operating system, you can use **Ubuntu 22.04 LTS (Jammy Jellyfish)** or **Debian 11 (Bullseye)**.

> Please note, your server must have at least **6 GB** of RAM. If your server has **4 GB** of RAM or lower, you still can follow this tutorial, but your Minecraft server will not run so smoothly and we don't recommend it. We recommend you to have **6 GB** of RAM or more.

Second, you should connect to your server through SSH. You can use [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) or [Termius](https://termius.com/). After you connecting to your server, you must at least have 1 user that has **sudo** power/permission. If you don't know how to do it, you can create one user by following command:

```shell 
adduser <your name>
```

Example: 

```shell
adduser sleepnov4
```

And now, you can give the **sudo** permission by following command:

```shell
usermod -aG sudo <your name>
```

Example: 

```shell
usermod -aG sudo sleepnov4
```

> Please note, to give the **sudo** permission, it must done by using **root** user account.

We assume if you are currently using the **root** user account, and you should change to your fresh created user account. You can run this command: 

> As for security purposes, we don't recommend you to use the **root** user account for other activity than this. To give a **sudo** permission to your user account, it requires **root** user account.

```shell
su <your name>
```

Example: 

```shell
su sleepnov4
```

Now, your currently using your fresh created user account, and you can run this command: 

```shell
sudo apt update && sudo apt upgrade
```

This command will fetch and update all necessary packages to the latest version.

Third, you will need a **Java Development Kit** or **JDK** for short. 

Since we are about to run a **Minecraft: Java Edition** server, you will need this to run your Minecraft server.
Now, please run these commands in order: 

> You are about to install a JDK version **17** from [Eclipse Adoptium](https://adoptium.net). If you don't want to install the JDK from this organization, you can install the JDK from [Azul Zulu](https://www.azul.com) or [Amazon Correto](https://aws.amazon.com/corretto).

```shell
sudo apt install -y wget apt-transport-https
wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public | gpg --dearmor | tee /etc/apt/trusted.gpg.d/adoptium.gpg > /dev/null
echo "deb https://packages.adoptium.net/artifactory/deb $(awk -F= '/^VERSION_CODENAME/{print$2}' /etc/os-release) main" | tee /etc/apt/sources.list.d/adoptium.list
```

After you done run those commmands, now, you run these command in order too: 

```shell
sudo apt update
sudo apt install temurin-17-jdk
```

To check if your JDK already installed or not, you can run this command: 

```shell
java --version
```

The command will show you something like this: 

```shell
openjdk 17.0.9 2023-10-17
OpenJDK Runtime Environment Temurin-17.0.9+9 (build 17.0.9+9)
OpenJDK 64-Bit Server VM Temurin-17.0.9+9 (build 17.0.9+9, mixed mode, sharing)
```

And it means the JDK was successfully installed.

And that's the end for the Part 1 of the tutorial. We will continue the tutorial on the Part 2 post. See you there! 👋