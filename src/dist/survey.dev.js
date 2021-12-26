"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _females;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dataObject = {
  "males": {
    "45": {
      "nonSmoke": {
        A: 3.20,
        B: 2.5,
        C: 1.70,
        D: 1.32
      },
      "smoke": {
        A: 5.54,
        B: 3.56,
        C: 2.76,
        D: 2.07
      }
    },
    "46": {
      "nonSmoke": {
        A: 3.26,
        B: 2.55,
        C: 1.78,
        D: 1.38
      },
      "smoke": {
        A: 5.68,
        B: 3.81,
        C: 2.93,
        D: 2.19
      }
    },
    "47": {
      "nonSmoke": {
        A: 3.32,
        B: 2.60,
        C: 1.86,
        D: 1.45
      },
      "smoke": {
        A: 5.68,
        B: 3.81,
        C: 2.93,
        D: 2.19
      }
    },
    "48": {
      "nonSmoke": {
        A: 3.40,
        B: 2.56,
        C: 1.95,
        D: 1.54
      },
      "smoke": {
        A: 5.95,
        B: 3.31,
        C: 3.28,
        D: 2.37
      }
    },
    "49": {
      "nonSmoke": {
        A: 3.46,
        B: 2.70,
        C: 1.99,
        D: 1.63
      },
      "smoke": {
        A: 6.09,
        B: 4.56,
        C: 3.48,
        D: 2.49
      }
    },
    "50": {
      "nonSmoke": {
        A: 3.53,
        B: 2.75,
        C: 2.03,
        D: 1.73
      },
      "smoke": {
        A: 6.21,
        B: 4.82,
        C: 3.50,
        D: 2.60
      }
    },
    "51": {
      "nonSmoke": {
        A: 3.72,
        B: 2.87,
        C: 2.09,
        D: 1.82
      },
      "smoke": {
        A: 6.52,
        B: 5.05,
        C: 3.66,
        D: 2.79
      }
    },
    "52": {
      "nonSmoke": {
        A: 3.91,
        B: 3.00,
        C: 2.16,
        D: 1.91
      },
      "smoke": {
        A: 6.83,
        B: 5.31,
        C: 3.84,
        D: 2.99
      }
    },
    "53": {
      "nonSmoke": {
        A: 4.00,
        B: 3.13,
        C: 2.22,
        D: 1.92
      },
      "smoke": {
        A: 7.13,
        B: 5.57,
        C: 4.03,
        D: 3.18
      }
    },
    "54": {
      "nonSmoke": {
        A: 4.30,
        B: 3.25,
        C: 2.28,
        D: 1.98
      },
      "smoke": {
        A: 7.44,
        B: 5.83,
        C: 4.21,
        D: 3.38
      }
    },
    "55": {
      "nonSmoke": {
        A: 4.99,
        B: 3.37,
        C: 2.35,
        D: 2.03
      },
      "smoke": {
        A: 7.75,
        B: 6.00,
        C: 4.40,
        D: 3.57
      }
    },
    "56": {
      "nonSmoke": {
        A: 4.80,
        B: 3.61,
        C: 2.55,
        D: 2.21
      },
      "smoke": {
        A: 8.26,
        B: 6.48,
        C: 4.71,
        D: 3.80
      }
    },
    "57": {
      "nonSmoke": {
        A: 5.11,
        B: 3.84,
        C: 2.75,
        D: 2.38
      },
      "smoke": {
        A: 8.77,
        B: 6.84,
        C: 5.01,
        D: 4.03
      }
    },
    "58": {
      "nonSmoke": {
        A: 5.42,
        B: 4.07,
        C: 2.95,
        D: 2.55
      },
      "smoke": {
        A: 9.28,
        B: 7.22,
        C: 5.32,
        D: 4.26
      }
    },
    "59": {
      "nonSmoke": {
        A: 5.74,
        B: 4.31,
        C: 3.15,
        D: 2.73
      },
      "smoke": {
        A: 9.79,
        B: 7.60,
        C: 5.63,
        D: 4.49
      }
    },
    "60": {
      "nonSmoke": {
        A: 6.05,
        B: 4.54,
        C: 3.35,
        D: 2.90
      },
      "smoke": {
        A: 10.30,
        B: 8.00,
        C: 5.94,
        D: 4.71
      }
    },
    "61": {
      "nonSmoke": {
        A: 6.53,
        B: 4.91,
        C: 3.64,
        D: 3.19
      },
      "smoke": {
        A: 11.15,
        B: 8.44,
        C: 6.35,
        D: 5.03
      }
    },
    "62": {
      "nonSmoke": {
        A: 7.01,
        B: 5.29,
        C: 3.92,
        D: 3.43
      },
      "smoke": {
        A: 12.02,
        B: 8.90,
        C: 6.76,
        D: 5.35
      }
    },
    "63": {
      "nonSmoke": {
        A: 7.50,
        B: 5.66,
        C: 4.21,
        D: 3.66
      },
      "smoke": {
        A: 12.88,
        B: 9.37,
        C: 7.17,
        D: 5.67
      }
    },
    "64": {
      "nonSmoke": {
        A: 7.98,
        B: 6.04,
        C: 4.49,
        D: 3.89
      },
      "smoke": {
        A: 13.74,
        B: 9.83,
        C: 7.58,
        D: 6.00
      }
    },
    "65": {
      "nonSmoke": {
        A: 8.46,
        B: 6.35,
        C: 4.78,
        D: 4.13
      },
      "smoke": {
        A: 14.60,
        B: 10.31,
        C: 7.99,
        D: 6.31
      }
    },
    "66": {
      "nonSmoke": {
        A: 9.34,
        B: 6.85,
        C: 5.17,
        D: 4.48
      },
      "smoke": {
        A: 15.90,
        B: 11.44,
        C: 8.52,
        D: 6.74
      }
    },
    "67": {
      "nonSmoke": {
        A: 10.22,
        B: 7.35,
        C: 5.56,
        D: 4.82
      },
      "smoke": {
        A: 17.20,
        B: 12.48,
        C: 9.06,
        D: 7.17
      }
    },
    "68": {
      "nonSmoke": {
        A: 11.10,
        B: 7.85,
        C: 5.95,
        D: 5.17
      },
      "smoke": {
        A: 18.51,
        B: 13.51,
        C: 9.59,
        D: 7.59
      }
    },
    "69": {
      "nonSmoke": {
        A: 11.98,
        B: 8.35,
        C: 6.34,
        D: 5.51
      },
      "smoke": {
        A: 19.81,
        B: 14.55,
        C: 10.13,
        D: 8.02
      }
    },
    "70": {
      "nonSmoke": {
        A: 12.85,
        B: 8.85,
        C: 6.73,
        D: 5.86
      },
      "smoke": {
        A: 21.12,
        B: 15.59,
        C: 10.66,
        D: 8.45
      }
    },
    "71": {
      "nonSmoke": {
        A: 14.15,
        B: 9.45,
        C: 7.34,
        D: 6.42
      },
      "smoke": {
        A: 22.71,
        B: 16.87,
        C: 11.39,
        D: 9.24
      }
    },
    "72": {
      "nonSmoke": {
        A: 15.06,
        B: 10.05,
        C: 7.96,
        D: 6.99
      },
      "smoke": {
        A: 24.31,
        B: 18.15,
        C: 12.12,
        D: 10.03
      }
    },
    "73": {
      "nonSmoke": {
        A: 15.96,
        B: 10.65,
        C: 8.58,
        D: 7.55
      },
      "smoke": {
        A: 25.91,
        B: 19.44,
        C: 12.85,
        D: 10.82
      }
    },
    "74": {
      "nonSmoke": {
        A: 16.86,
        B: 11.25,
        C: 9.20,
        D: 8.11
      },
      "smoke": {
        A: 27.51,
        B: 20.72,
        C: 13.58,
        D: 11.61
      }
    },
    "75": {
      "nonSmoke": {
        A: 17.76,
        B: 11.86,
        C: 9.82,
        D: 8.67
      },
      "smoke": {
        A: 29.11,
        B: 22.00,
        C: 14.30,
        D: 12.40
      }
    },
    "76": {
      "nonSmoke": {
        A: 'N/A',
        B: 14.02,
        C: 10.93,
        D: 9.30
      },
      "smoke": {
        A: 'N/A',
        B: 22.11,
        C: 15.66,
        D: 13.23
      }
    },
    "77": {
      "nonSmoke": {
        A: 'N/A',
        B: 16.19,
        C: 12.04,
        D: 9.92
      },
      "smoke": {
        A: 'N/A',
        B: 22.23,
        C: 17.01,
        D: 14.06
      }
    },
    "78": {
      "nonSmoke": {
        A: 'N/A',
        B: 18.35,
        C: 13.15,
        D: 10.55
      },
      "smoke": {
        A: 'N/A',
        B: 22.38,
        C: 18.36,
        D: 14.88
      }
    },
    "79": {
      "nonSmoke": {
        A: 'N/A',
        B: 20.52,
        C: 14.26,
        D: 11.17
      },
      "smoke": {
        A: 'N/A',
        B: 22.45,
        C: 19.72,
        D: 15.71
      }
    },
    "80": {
      "nonSmoke": {
        A: 'N/A',
        B: 22.69,
        C: 15.37,
        D: 11.80
      },
      "smoke": {
        A: 'N/A',
        B: 22.79,
        C: 21.07,
        D: 16.54
      }
    }
  },
  "females": (_females = {
    "45": {
      "nonSmoke": {
        A: 2.40,
        B: 2.09,
        C: 1.42,
        D: 1.19
      },
      "smoke": {
        A: 3.60,
        B: 2.90,
        C: 2.14,
        D: 1.65
      }
    },
    "46": {
      "nonSmoke": {
        A: 2.50,
        B: 2.12,
        C: 1.45,
        D: 1.25
      },
      "smoke": {
        A: 3.73,
        B: 2.99,
        C: 2.18,
        D: 1.74
      }
    },
    "47": {
      "nonSmoke": {
        A: 2.59,
        B: 2.14,
        C: 1.48,
        D: 1.31
      },
      "smoke": {
        A: 3.86,
        B: 3.08,
        C: 2.23,
        D: 1.82
      }
    },
    "48": {
      "nonSmoke": {
        A: 2.68,
        B: 2.17,
        C: 1.52,
        D: 1.39
      },
      "smoke": {
        A: 3.99,
        B: 3.17,
        C: 2.27,
        D: 1.91
      }
    },
    "49": {
      "nonSmoke": {
        A: 2.78,
        B: 2.19,
        C: 1.54,
        D: 1.47
      },
      "smoke": {
        A: 4.12,
        B: 3.25,
        C: 2.32,
        D: 2.00
      }
    },
    "50": {
      "nonSmoke": {
        A: 2.79,
        B: 2.21,
        C: 1.58,
        D: 1.48
      },
      "smoke": {
        A: 4.25,
        B: 3.34,
        C: 2.36,
        D: 2.08
      }
    },
    "51": {
      "nonSmoke": {
        A: 2.92,
        B: 2.32,
        C: 1.69,
        D: 1.54
      },
      "smoke": {
        A: 4.43,
        B: 3.56,
        C: 2.50,
        D: 2.19
      }
    },
    "52": {
      "nonSmoke": {
        A: 3.05,
        B: 2.42,
        C: 1.80,
        D: 1.62
      },
      "smoke": {
        A: 4.61,
        B: 3.77,
        C: 2.63,
        D: 2.30
      }
    },
    "53": {
      "nonSmoke": {
        A: 3.18,
        B: 2.53,
        C: 1.90,
        D: 1.69
      },
      "smoke": {
        A: 4.78,
        B: 3.99,
        C: 2.77,
        D: 2.41
      }
    },
    "54": {
      "nonSmoke": {
        A: 3.31,
        B: 2.63,
        C: 2.01,
        D: 1.76
      },
      "smoke": {
        A: 4.97,
        B: 4.20,
        C: 2.90,
        D: 2.52
      }
    },
    "55": {
      "nonSmoke": {
        A: 3.44,
        B: 2.74,
        C: 2.12,
        D: 1.84
      },
      "smoke": {
        A: 5.15,
        B: 4.42,
        C: 3.04,
        D: 2.63
      }
    },
    "56": {
      "nonSmoke": {
        A: 3.74,
        B: 2.93,
        C: 2.24,
        D: 1.93
      },
      "smoke": {
        A: 5.74,
        B: 4.60,
        C: 3.21,
        D: 2.79
      }
    },
    "57": {
      "nonSmoke": {
        A: 3.94,
        B: 3.12,
        C: 2.36,
        D: 2.09
      },
      "smoke": {
        A: 5.79,
        B: 4.78,
        C: 3.39,
        D: 2.94
      }
    },
    "58": {
      "nonSmoke": {
        A: 4.13,
        B: 3.31,
        C: 2.48,
        D: 2.21
      },
      "smoke": {
        A: 6.11,
        B: 4.96,
        C: 3.57,
        D: 3.09
      }
    },
    "59": {
      "nonSmoke": {
        A: 4.33,
        B: 3.50,
        C: 2.60,
        D: 2.34
      },
      "smoke": {
        A: 6.43,
        B: 5.15,
        C: 3.74,
        D: 3.24
      }
    },
    "60": {
      "nonSmoke": {
        A: 4.52,
        B: 3.69,
        C: 2.72,
        D: 2.46
      },
      "smoke": {
        A: 6.76,
        B: 5.33,
        C: 3.92,
        D: 3.34
      }
    }
  }, _defineProperty(_females, "60", {
    "nonSmoke": {
      A: 4.52,
      B: 3.69,
      C: 2.72,
      D: 2.46
    },
    "smoke": {
      A: 6.76,
      B: 5.33,
      C: 3.92,
      D: 3.39
    }
  }), _defineProperty(_females, "61", {
    "nonSmoke": {
      A: 4.80,
      B: 3.94,
      C: 2.92,
      D: 2.63
    },
    "smoke": {
      A: 7.12,
      B: 5.64,
      C: 4.16,
      D: 3.62
    }
  }), _defineProperty(_females, "62", {
    "nonSmoke": {
      A: 5.08,
      B: 4.20,
      C: 3.11,
      D: 2.79
    },
    "smoke": {
      A: 7.48,
      B: 5.96,
      C: 4.39,
      D: 3.84
    }
  }), _defineProperty(_females, "63", {
    "nonSmoke": {
      A: 5.36,
      B: 4.45,
      C: 3.30,
      D: 2.96
    },
    "smoke": {
      A: 7.84,
      B: 6.27,
      C: 4.63,
      D: 4.07
    }
  }), _defineProperty(_females, "64", {
    "nonSmoke": {
      A: 5.64,
      B: 4.70,
      C: 3.49,
      D: 3.13
    },
    "smoke": {
      A: 8.21,
      B: 6.59,
      C: 4.87,
      D: 4.22
    }
  }), _defineProperty(_females, "65", {
    "nonSmoke": {
      A: 5.92,
      B: 4.96,
      C: 3.61,
      D: 3.29
    },
    "smoke": {
      A: 8.57,
      B: 6.90,
      C: 5.10,
      D: 4.43
    }
  }), _defineProperty(_females, "66", {
    "nonSmoke": {
      A: 6.19,
      B: 4.35,
      C: 3.94,
      D: 3.47
    },
    "smoke": {
      A: 9.23,
      B: 7.43,
      C: 5.46,
      D: 4.74
    }
  }), _defineProperty(_females, "67", {
    "nonSmoke": {
      A: 6.71,
      B: 5.74,
      C: 4.19,
      D: 3.65
    },
    "smoke": {
      A: 9.95,
      B: 8.01,
      C: 5.82,
      D: 5.05
    }
  }), _defineProperty(_females, "68", {
    "nonSmoke": {
      A: 7.24,
      B: 6.14,
      C: 4.44,
      D: 3.83
    },
    "smoke": {
      A: 10.66,
      B: 8.59,
      C: 6.18,
      D: 5.36
    }
  }), _defineProperty(_females, "69", {
    "nonSmoke": {
      A: 7.76,
      B: 6.53,
      C: 4.70,
      D: 4.01
    },
    "smoke": {
      A: 11.38,
      B: 9.17,
      C: 6.54,
      D: 5.67
    }
  }), _defineProperty(_females, "70", {
    "nonSmoke": {
      A: 8.29,
      B: 6.92,
      C: 4.95,
      D: 4.19
    },
    "smoke": {
      A: 12.10,
      B: 9.74,
      C: 6.90,
      D: 5.99
    }
  }), _defineProperty(_females, "71", {
    "nonSmoke": {
      A: 8.87,
      B: 7.41,
      C: 4.48,
      D: 4.58
    },
    "smoke": {
      A: 13.04,
      B: 10.50,
      C: 7.44,
      D: 6.44
    }
  }), _defineProperty(_females, "72", {
    "nonSmoke": {
      A: 9.45,
      B: 7.89,
      C: 6.02,
      D: 4.97
    },
    "smoke": {
      A: 13.98,
      B: 11.26,
      C: 7.98,
      D: 6.89
    }
  }), _defineProperty(_females, "73", {
    "nonSmoke": {
      A: 10.03,
      B: 8.38,
      C: 6.55,
      D: 5.36
    },
    "smoke": {
      A: 14.92,
      B: 12.02,
      C: 8.53,
      D: 7.35
    }
  }), _defineProperty(_females, "74", {
    "nonSmoke": {
      A: 10.61,
      B: 8.86,
      C: 7.08,
      D: 5.74
    },
    "smoke": {
      A: 15.86,
      B: 12.78,
      C: 9.07,
      D: 7.80
    }
  }), _defineProperty(_females, "75", {
    "nonSmoke": {
      A: 11.19,
      B: 9.35,
      C: 7.62,
      D: 6.13
    },
    "smoke": {
      A: 16.81,
      B: 13.53,
      C: 9.61,
      D: 8.26
    }
  }), _defineProperty(_females, "76", {
    "nonSmoke": {
      A: 'N/A',
      B: 11.60,
      C: 8.32,
      D: 6.62
    },
    "smoke": {
      A: 'N/A',
      B: 14.97,
      C: 10.48,
      D: 8.84
    }
  }), _defineProperty(_females, "77", {
    "nonSmoke": {
      A: 'N/A',
      B: 13.84,
      C: 9.03,
      D: 7.12
    },
    "smoke": {
      A: 'N/A',
      B: 16.41,
      C: 11.35,
      D: 9.42
    }
  }), _defineProperty(_females, "78", {
    "nonSmoke": {
      A: 'N/A',
      B: 16.09,
      C: 9.71,
      D: 7.61
    },
    "smoke": {
      A: 'N/A',
      B: 17.85,
      C: 12.21,
      D: 10.01
    }
  }), _defineProperty(_females, "79", {
    "nonSmoke": {
      A: 'N/A',
      B: 18.34,
      C: 10.45,
      D: 8.10
    },
    "smoke": {
      A: 'N/A',
      B: 19.29,
      C: 13.08,
      D: 10.59
    }
  }), _defineProperty(_females, "80", {
    "nonSmoke": {
      A: 'N/A',
      B: 20.59,
      C: 11.15,
      D: 8.60
    },
    "smoke": {
      A: 'N/A',
      B: 20.73,
      C: 13.95,
      D: 11.17
    }
  }), _females)
};
var _default = dataObject;
exports["default"] = _default;