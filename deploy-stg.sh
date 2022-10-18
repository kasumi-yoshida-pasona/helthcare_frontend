#!/bin/sh

aws s3 rm s3://test-hosting-frontend-980855745276/ --recursive
aws s3 cp dist s3://test-hosting-frontend-980855745276/ --recursive