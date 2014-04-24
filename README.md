###Sencha Touch 2 Template

This is basic Sencha Touch 2 app template based off [Alan Moran's Blog Post](http://www.alanmoran.me)

The blog post follows setting up Hybrid app using the [FeedHenry](https://www.feedhenry.com) Cloud platform.

Before pushing your changes up to the Feedhenry Studio you will be required to perform a build, which clears all unused dependencies
from the development folder, minifies the Javascript and creates the files required.

You will first need to make the `senchaBuild.sh` script executable.

To do this from the `root` of your project enter `chmod 755 senchaBuild.sh`.

To perform build process from `root` of project enter `./senchaBuild.sh`.

This will clear all the old files from the `client/default` directory and replace with updated code.

Enjoy!!
