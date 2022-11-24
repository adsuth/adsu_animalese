const dir = "meta/"
const PLAYBACK_SPEED = 2.25

let word = "ooo guanos mangos among. gaums ogams snug gas... moans mun. us. mungs nomas muons."

function combineAudio() {
  let filteredWord = word.toLowerCase().replace( /[^a-z\.]/g, "" )
  let letters = Array.from( filteredWord ).map( letter => getLetterMp3( letter )  )

  let promises = letters.map( letter => fetch( dir + letter ).then( res => res.blob() ) )

  Promise.all( promises )
    .then(data => {
      let blob = new Blob( data )
      let blobUrl = URL.createObjectURL( blob )
      let audio = new Audio( blobUrl )

      playVoice( audio )
    })

}

function playVoice( audio )
{
  audio.playbackRate = PLAYBACK_SPEED
  audio.preservesPitch = false

  audio.play()
}

function getLetterMp3( letter )
{
  switch ( letter )
  {
    case ".":
      return `empty.mp3`
    
    case letter:
      return `${letter}.mp3`

    default:
      return `empty.mp3`
  }
}

document.querySelector( "#btn" ).addEventListener( "click", combineAudio )