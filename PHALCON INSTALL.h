sudo apt-get install curl gnupg
curl -L https://packagecloud.io/phalcon/stable/gpgkey | sudo apt-key add -
sudo apt-get update
sudo apt-get install debian-archive-keyring
sudo apt-get install -y apt-transport-https
# Agregar a /etc/apt/source.list
deb https://packagecloud.io/phalcon/stable/debian/ stretch main
deb-src https://packagecloud.io/phalcon/stable/debian/ stretch main

sudo apt-get install php7.0-phalcon
sudo apt-get install software-properties-common
sudo apt-get install php7.0-dev
git clone --depth=1 "git://github.com/phalcon/cphalcon.git"
cd cphalcon/build
sudo ./install
# Phalcon dev-tools
git clone git://github.com/phalcon/phalcon-devtools.git
sudo ln -s ~/phalcon-devtools/phalcon.php /usr/bin/phalcon
sudo chmod ugo+x /usr/bin/phalcon