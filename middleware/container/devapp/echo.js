
// console.log('echo ok')

const hour = 2
const milliseconds = 3.6e+6
const sleepingTime = hour * milliseconds

function sleep(ms) {
  return new Promise(resolve => setTimeout( () => resolve(true), ms));
}

async function echoooo() {
  console.log(`Hi here, I'm Echo and will be here until you fix. I will give you a word in ${hour} hour(s)`)
  while (await sleep(sleepingTime)) {
    console.log(`Echo: I'm still here, coming back in ${hour} hour(s)`)
  }

}

echoooo()
