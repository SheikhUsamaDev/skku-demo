import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const particlesInit = async (main) => {
    await loadFull(main);
};


const AnimatedParticles = () => {
    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                // loaded={particlesLoaded}
                
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "slow",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#f5f5f5",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 75,
                            enable: false,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 40,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />


        </div>
    )
}

export default AnimatedParticles