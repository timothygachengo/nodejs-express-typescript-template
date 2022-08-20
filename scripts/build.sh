#!/bin/bash
stat dist || mkdir dist
# Archive artifacts
zip dist/$npm_package_name.zip -r build secure prisma package.json package-lock.json