# Makefile for web deployment

all: PutHTML

PutHTML:
	cp resume.html /var/www/html/resumeboot/
	cp resume.css /var/www/html/resumeboot/
	cp resume.js /var/www/html/resumeboot/
	
	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/resumeboot/
