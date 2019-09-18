#!/usr/bin/env bash
cd packages
mkdir 45KBDK_KGL-KGL
cd 45KBDK_KGL-KGL
mkdir css
mkdir fonts
mkdir html
mkdir js
mkdir img
cp -a ../../css/custom1.css css/
cp -a ../../js/custom.js js/
cp -a ../../html/* html/
cp -a ../../fonts/* fonts/
cp -a ../../img/* img/