import IMask from 'imask'

// DOM elements
const minPerMile = document.getElementById('min-per-miles')
const minPerKm = document.getElementById('min-per-km')
const fiveK = document.getElementById('fiveK')
const tenK = document.getElementById('tenK')
const half = document.getElementById('half')
const marathon = document.getElementById('marathon')
const calcBtn = document.getElementById('calc-btn')

// units 
const convNum = 1.690344
const fiveKDist = 3.1
const tenKDist = 6.2
const halfDist = 13.1
const marathonDist = 26.2

// masking the input
const maskOptions = {
  mask: '00{:}00{:}00'
};

/** CALCULATIONS FROM 5K FIELD  */

function mpmFrom5K(sec) {
    let fiveKtoMin = sec / fiveKDist
    let hours = (fiveKtoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function kmFrom5K(sec) {
    let fiveKtoMin = (sec / fiveKDist) / convNum
    let hours = (fiveKtoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function tenKFrom5K(sec) {
    let fiveKtoMin = sec * 2
    let hours = (fiveKtoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}



function halfFrom5K(sec) {
    let fiveKtoMin = sec * 4.22
    let hours = (fiveKtoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function fullFrom5K(sec) {
    let fiveKtoMin = sec * 8.44
    let hours = (fiveKtoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}


/** CALCULATIONS FROM 10K FIELD */

function mpmFrom10K(sec) {
    let tenKtoMin = sec / tenKDist
    let hours = (tenKtoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function kmFrom10K(sec) {
    let tenKtoMin = (sec / tenKDist) / convNum
    let hours = (tenKtoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function fiveKFrom10K(sec) {
    let tenKtoMin = sec / 2
    let hours = (tenKtoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function halfFrom10K(sec) {
    let halftoMin = sec * 2.11
    let hours = (halftoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function fullFrom10K(sec) {
    let fulltoMin = sec * 4.22
    let hours = (fulltoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

/** CALCULATION FROM HALF FIELD */

function mpmFromHalf(sec) {
    let halftoMin = sec / halfDist
    let hours = (halftoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function kmFromHalf(sec) {
    let halftoMin = (sec / halfDist) / convNum
    let hours = (halftoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function fiveKFromHalf(sec) {
    let halftoMin = sec / 4.22
    let hours = (halftoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function tenKFromHalf(sec) {
    let HalftoMin = sec / 2.11
    let hours = (HalftoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function fullFromHalf(sec) {
    let halftoMin = sec * 2
    let hours = (halftoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}


/** CALCULATION FROM FULL FIELD */

function mpmFromFull(sec) {
    let fulltoMin = sec / marathonDist
    let hours = (fulltoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function kmFromFull(sec) {
    let fulltoMin = (sec / marathonDist) / convNum
    let hours = (fulltoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}


function fiveKFromFull(sec) {
    let fulltoMin = sec / 8.44
    let hours = (fulltoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}


function tenKFromFull(sec) {
    let fulltoMin = sec / 4.22
    let hours = (fulltoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}

function halfFromFull(sec) {
    let fulltoMin = sec / 2
    let hours = (fulltoMin / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}









function mpmTime(sec) {
    let mpmConv = sec * convNum
    let hours = (mpmConv / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}


function kmTime(sec) {
    let kmConv = sec / convNum
    let hours = (kmConv / 3600)
    let minutes = (hours - Math.floor(hours)) * 60
    let seconds = (minutes - Math.floor(minutes)) * 60
    let padHours = Math.floor(hours).toString().padStart(2, '0')
    let padMin = Math.floor(minutes).toString().padStart(2, '0')
    let padSec = Math.floor(seconds).toString().padStart(2, '0')
    
    return `${padHours}:${padMin}:${padSec}`
}


function fiveKTime(sec) {
    let fiveKHours = ((sec * fiveKDist) / 3600)
    let fiveKMinutes = (fiveKHours - Math.floor(fiveKHours)) * 60
    let fiveKSeconds = (fiveKMinutes - Math.floor(fiveKMinutes)) * 60
    let padFiveKHours = Math.floor(fiveKHours).toString().padStart(2, '0')
    let padFiveKMinutes = Math.floor(fiveKMinutes).toString().padStart(2, '0')
    let padFiveKSeconds = Math.floor(fiveKSeconds).toString().padStart(2, '0')

    return `${padFiveKHours}:${padFiveKMinutes}:${padFiveKSeconds}`
}

function tenKTime(sec) {
    let tenKHours = ((sec * tenKDist) / 3600)
    let tenKMinutes = (tenKHours - Math.floor(tenKHours)) * 60
    let tenKSeconds = (tenKMinutes - Math.floor(tenKMinutes)) * 60
    let padTenKHours = Math.floor(tenKHours).toString().padStart(2, '0')
    let padTenKMinutes = Math.floor(tenKMinutes).toString().padStart(2, '0')
    let padTenKSeconds = Math.floor(tenKSeconds).toString().padStart(2, '0')
    
    return `${padTenKHours}:${padTenKMinutes}:${padTenKSeconds}`
}

function halfTime(sec) {
    let halfHours = ((sec * halfDist) / 3600)
    let halfMinutes = (halfHours - Math.floor(halfHours)) * 60
    let halfSeconds = (halfMinutes - Math.floor(halfMinutes)) * 60
    let padHalfHours = Math.floor(halfHours).toString().padStart(2, '0')
    let padHalfMinutes = Math.floor(halfMinutes).toString().padStart(2, '0')
    let padHalfSeconds = Math.floor(halfSeconds).toString().padStart(2, '0')
    
    return `${padHalfHours}:${padHalfMinutes}:${padHalfSeconds}`
}

function marathonTime(sec) {
    let marathonHours = ((sec * marathonDist) / 3600)
    let marathonMinutes = (marathonHours - Math.floor(marathonHours)) * 60
    let marathonSeconds = (marathonMinutes - Math.floor(marathonMinutes)) * 60
    let padMarathonHours = Math.floor(marathonHours).toString().padStart(2, '0')
    let padMarathonMinutes = Math.floor(marathonMinutes).toString().padStart(2, '0')
    let padMarathonSeconds = Math.floor(marathonSeconds).toString().padStart(2, '0')
    
    return `${padMarathonHours}:${padMarathonMinutes}:${padMarathonSeconds}`
}

function clearFieldsMiles() {
                minPerKm.value = ''
                fiveK.value = ''
                tenK.value = ''
                half.value = ''
                marathon.value = ''
}

function clearFieldsKm() {
                minPerMile.value = ''
                fiveK.value = ''
                tenK.value = ''
                half.value = ''
                marathon.value = ''
}

function clearFields5K() {
                minPerMile.value = ''
                minPerKm.value = ''
                tenK.value = ''
                half.value = ''
                marathon.value = ''
}

function clearFields10K() {
                minPerMile.value = ''
                minPerKm.value = ''
                fiveK.value = ''
                half.value = ''
                marathon.value = ''
}

function clearFieldsHalf() {
                minPerMile.value = ''
                minPerKm.value = ''
                fiveK.value = ''
                tenK.value = ''
                marathon.value = ''
}

function clearFieldsMarathon() {
                minPerMile.value = ''
                minPerKm.value = ''
                fiveK.value = ''
                tenK.value = ''
                half.value = ''
}


//min/mile field calculations    

minPerMile.addEventListener('input', (e) => {
    let mpm = e.target.value
    let splitTime = mpm.split(":")
    let sec = (splitTime[0] * 3600) + (splitTime[1] * 60) + (splitTime[2] * 1)
    const mask = IMask(minPerMile, maskOptions);
        
    // checks if time has been set before rendering out the other input fields
    if (mpm.length === 8) {
            minPerKm.value =  kmTime(sec)
            fiveK.value =  fiveKTime(sec)
            tenK.value = tenKTime(sec)
            half.value = halfTime(sec)
            marathon.value = marathonTime(sec)
            } else {
                clearFieldsMiles()
            }
})


//min per km calculations

minPerKm.addEventListener('input', (e) => {
    let kmpm = e.target.value
    let splitTime = kmpm.split(":")
    let sec = (splitTime[0] * 3600) + (splitTime[1] * 60) + (splitTime[2] * 1)
    const mask = IMask(minPerKm, maskOptions)
    
    
    if (kmpm.length === 8) {
        minPerMile.value =  mpmTime(sec)
        fiveK.value =  fiveKTime(sec)
        tenK.value = tenKTime(sec)
        half.value = halfTime(sec)
        marathon.value = marathonTime(sec)
    } else {
        clearFieldsKm()
    }
    
})

//5K field calculations
/** change here */
fiveK.addEventListener('input', (e) => {
    let fiveKValue = e.target.value
    let splitTime = fiveKValue.split(":")
    let sec = (splitTime[0] * 3600) + (splitTime[1] * 60) + (splitTime[2] * 1)
    const mask = IMask(fiveK, maskOptions);
    
    
    if (fiveKValue.length === 8) {
        minPerMile.value =  mpmFrom5K(sec) // needs new math here
        minPerKm.value =  kmFrom5K(sec)
        tenK.value = tenKFrom5K(sec)
        half.value = halfFrom5K(sec)
        marathon.value = fullFrom5K(sec)
    } else {
        clearFields5K()
    }
})

//10K field calculation
tenK.addEventListener('input', (e) => {
    let tenKValue = e.target.value
    let splitTime = tenKValue.split(":")
    let sec = (splitTime[0] * 3600) + (splitTime[1] * 60) + (splitTime[2] * 1)
    const mask = IMask(tenK, maskOptions);
      
    
    if (tenKValue.length === 8) {
        minPerMile.value =  mpmFrom10K(sec)
        minPerKm.value =  kmFrom10K(sec)
        fiveK.value = fiveKFrom10K(sec)
        half.value = halfFrom10K(sec)
        marathon.value = fullFrom10K(sec)
    } else {
        clearFields10K()
    }
})

//half field calculation
half.addEventListener('input', (e) => {
    let halfValue = e.target.value
    let splitTime = halfValue.split(":")
    let sec = (splitTime[0] * 3600) + (splitTime[1] * 60) + (splitTime[2] * 1)
    const mask = IMask(half, maskOptions);
      
    
    if (halfValue.length === 8) {
        minPerMile.value =  mpmFromHalf(sec)
        minPerKm.value =  kmFromHalf(sec)
        fiveK.value = fiveKFromHalf(sec)
        tenK.value = tenKFromHalf(sec)
        marathon.value = fullFromHalf(sec)
    } else {
        clearFieldsHalf()
    }
})

//marathon field calculation
marathon.addEventListener('input', (e) => {
    let marathonValue = e.target.value
    let splitTime = marathonValue.split(":")
    let sec = (splitTime[0] * 3600) + (splitTime[1] * 60) + (splitTime[2] * 1)
    const mask = IMask(marathon, maskOptions);
      
    
    if (marathonValue.length === 8) {
        minPerMile.value =  mpmFromFull(sec)
        minPerKm.value =  kmFromFull(sec)
        fiveK.value = fiveKFromFull(sec)
        tenK.value = tenKFromFull(sec)
        half.value = halfFromFull(sec)
    } else {
        clearFieldsMarathon()
    }
})


