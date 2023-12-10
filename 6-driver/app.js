const hasLicence = true
const age = 20
const isDrunk = false

const canDrive = hasLicence && age > 18 && !isDrunk ? "Может" : "Не может"
console.log(canDrive)

