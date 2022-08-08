var createError = require('http-errors');
var express = require('express');
var dotenv = require("dotenv");
var db = require("./configs/database");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')