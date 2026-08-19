import { SPACECRAFT_SPAWN } from "./constants.js";

export const TUTORIAL_LEVELS = {
    0: {
        // Initial level - just the player and planet
        planet: {
            radius: 25,
            mass: 15,
            atmosphere: 100,
            color: "lightblue",
            atmosphereColor: "rgba(135, 206, 235, {opacity})"
        },
        asteroids: {
            spawnInterval: 999999,
            minRadius: 0,
            maxRadius: 0,
            spawnRate: 0,
            initialVelocity: {
                x: Math.random(),
                y: Math.random()
            }
        },
        spacecraft: {
            xOffset: SPACECRAFT_SPAWN.X_OFFSET,
            yOffset: SPACECRAFT_SPAWN.Y_OFFSET,
            initialVelocity: SPACECRAFT_SPAWN.INITIAL_VELOCITY
        }
    },
    1: {
        // Level with very slow asteroids for practice
        planet: {
            radius: 25,
            mass: 15,
            atmosphere: 100,
            color: "lightblue",
            atmosphereColor: "rgba(135, 206, 235, {opacity})"
        },
        asteroids: {
            spawnInterval: 15000,
            minRadius: 8,
            maxRadius: 15,
            spawnRate: 1,
            initialVelocity: {
                x: 0.002,
                y: 0.001
            }
        },
        spacecraft: {
            xOffset: SPACECRAFT_SPAWN.X_OFFSET,
            yOffset: SPACECRAFT_SPAWN.Y_OFFSET,
            initialVelocity: SPACECRAFT_SPAWN.INITIAL_VELOCITY
        }
    },
    2: {
        // Level with medium speed asteroids
        planet: {
            radius: 25,
            mass: 15,
            atmosphere: 100,
            color: "lightblue",
            atmosphereColor: "rgba(135, 206, 235, {opacity})"
        },
        asteroids: {
            spawnInterval: 12000,
            minRadius: 8,
            maxRadius: 16,
            spawnRate: 1,
            initialVelocity: {
                x: 0.003,
                y: 0.0015
            }
        },
        spacecraft: {
            xOffset: SPACECRAFT_SPAWN.X_OFFSET,
            yOffset: SPACECRAFT_SPAWN.Y_OFFSET,
            initialVelocity: SPACECRAFT_SPAWN.INITIAL_VELOCITY
        }
    },
    3: {
        // Level with regular speed asteroids for practice
        planet: {
            radius: 25,
            mass: 15,
            atmosphere: 100,
            color: "lightblue",
            atmosphereColor: "rgba(135, 206, 235, {opacity})"
        },
        asteroids: {
            spawnInterval: 8000,
            minRadius: 8,
            maxRadius: 17,
            spawnRate: 1,
            initialVelocity: {
                x: 0.004,
                y: 0.002
            }
        },
        spacecraft: {
            xOffset: SPACECRAFT_SPAWN.X_OFFSET,
            yOffset: SPACECRAFT_SPAWN.Y_OFFSET,
            initialVelocity: SPACECRAFT_SPAWN.INITIAL_VELOCITY
        }
    }
  
};

export const LEVELS = {
    1: {
        planet: {
            radius: 25,
            mass: 15,
            atmosphere: 100,
            color: "blue",
            atmosphereColor: "rgba(135, 206, 235, {opacity})"
        },
        asteroids: {
            spawnInterval: 10000,
            minRadius: 12,
            maxRadius: 15,
            spawnRate: 1,
            initialVelocity: {
                x: 0.005,
                y: 0.0025
            }
        },
        spacecraft: {
            xOffset: SPACECRAFT_SPAWN.X_OFFSET,
            yOffset: SPACECRAFT_SPAWN.Y_OFFSET,
            initialVelocity: SPACECRAFT_SPAWN.INITIAL_VELOCITY
        }
    },
}; 