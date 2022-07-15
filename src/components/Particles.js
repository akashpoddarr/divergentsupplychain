import React, { Component } from "react";
import Particles from "react-particles-js";

let params = {
  particles: {
    number: {
      value: 50
    },
    shape: {
      stroke: {
        width: 2,
        color: "#fff"
      },
      polygon: {
        nb_sides: 7
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "fff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },

      resize: true
    },
    modes: {
      grab: {
        distance: 10,
        line_linked: {
          opacity: 1
        }
      },
      repulse: {
        distance: 500,
        duration: 0.4
      }
    }
  },
  retina_detect: true
};

class Particle extends Component {
  render() {
    return (
      <div id="particles-js">
        <Particles width="100vw" height="100vh"   params={{
        background: {
          color: {
            value: "#000"
          }
        },
        particles: {
          number: {
            value: 160,
            density: {
              enable: false
            }
          },
          size: {
            value: 2,
            random: true
          },
          move: {
            direction: "top",
            outMode: "out"
          },
          links: {
            enable: true
          }
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "remove"
            }
          },
          modes: {
            remove: {
              quantity: 10
            }
          }
        }
      }} />
      </div>
    );
  }
}

export default Particle;
