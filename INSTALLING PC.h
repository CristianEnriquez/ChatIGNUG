sudo apt-get install apache2 mysql-client mysql-server php7.0 libapache2-mod-php7.0 graphviz aspell php7.0-pspell php7.0-curl php7.0-gd php7.0-intl php7.0-mysql php7.0-xml php7.0-xmlrpc php7.0-ldap php7.0-zip php7.0-imap
sudo apt-get install git vlc filezilla brasero r-base rstudio libreoffice gimp godot inkscape wkhtmltopdf youtube-dl ffmpeg tesseract-ocr
sudo apt-get install npm
sudo npm install npm@latest -g
sudo npm i -g npm
sudo npm install -g n
sudo n 9.3.0
sudo chmod 777 -R /usr/lib/node_modules/
sudo npm install -g @angular/cli@latest
sudo apt-get install scratch
sudo npm install -g cordova
sudo npm install -g ionic
sudo apt-get install libbz2-1.0:i386
sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1
sudo apt-get install openjdk-8-jdk openjdk-8-jre
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export PATH=${PATH}:~/Android/Sdk/tools
export PATH=${PATH}:~/Android/Sdk/platform-tools
sudo apt install gradle
sudo update-alternatives --config javac /// Y SELECCIONAS EL 1.8
sudo a2enmod rewrite

#Agregar esto a /etc/apache2/sites-enabled/000default.conf
    <Directory /var/www/html>
        Options Indexes FollowSymLinks MultiViews
        AllowOverride All
        Order allow,deny
        allow from all
    </Directory>

sudo service apache2 restart

git remote add upstream "https://github.com/YaviracTec/sae.git"
git pull upstream master

npm run build