export const INITIAL_CREDITS = 500;

// number of seconds for trip
export const DURATION_MIN = 10;
export const DURATION_MAX = 41;

// durations are in seconds, I change this when testing
export const DURATION_INTERVAL = 1000;

// duration between random msg (in seconds):
export const RANDOM_MSG_INTERVAL = 200;

// duration for AUTO SHIP
export const AUTO_SHIP_DURATION = 20;

// how big the log div can be
export const MAX_LOG = 100;

// at this point, mercantile purchasing opens up
export const ALLOW_MERCANTILE = 10000;

// at this point, ship speed purchasing opens up
export const ALLOW_SHIPSPEED = 100000;

// at this point, ship speed purchasing opens up
export const ALLOW_AUTOSHIP = 1000000;

// at this point, you can buy 10x ships, if you have the money
export const ALLOW_10XSHIP = 50;
// ditto for 100X
export const ALLOW_100XSHIP = 100;

// at this point, credits per second stat opens up
export const ALLOW_CEPS = 5000;
export const CEPS_DURATION = 10;

// in theory, 1B for max
export const RANKS = [
	"Novice Shipmaster",
	"Kalguur Apprentice Shipmaster",
	"Ordinary Kalguur Shipmaster",
	"Able Kalguur Shipmaster",
	"Kalguurian Dockmaster",
	"Kalguurian Expert Shipmaster",
	"Kalguurian Shipwright",
	"Second Mate Shipmaster",
	"Chief Mate Shipmaster",
	"Captain Shipmaster"
];
