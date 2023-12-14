import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEndOfPage } from './hooks/end-of-page'

function App() {
  const [count, setCount] = useState(0)
  const {ref, atEndOfPage} = useEndOfPage()

  useEffect(() => {
    console.log('At end of page', atEndOfPage)
  }, [atEndOfPage])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Mattis enim ut tellus elementum sagittis vitae et leo. Quam pellentesque nec nam aliquam. Enim tortor at auctor urna nunc. Ac auctor augue mauris augue neque gravida in fermentum et. Amet luctus venenatis lectus magna fringilla. In aliquam sem fringilla ut morbi tincidunt augue. Facilisi morbi tempus iaculis urna id volutpat. Nisl vel pretium lectus quam id. Lectus sit amet est placerat. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Vel orci porta non pulvinar neque. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Vestibulum morbi blandit cursus risus. In ante metus dictum at. Scelerisque felis imperdiet proin fermentum leo.

Nunc sed velit dignissim sodales. Nam libero justo laoreet sit amet cursus sit amet dictum. Integer eget aliquet nibh praesent tristique magna. Mi proin sed libero enim. Morbi tincidunt augue interdum velit euismod. Mi quis hendrerit dolor magna eget est. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Enim neque volutpat ac tincidunt vitae semper. Aliquet nibh praesent tristique magna sit amet. Vitae justo eget magna fermentum iaculis eu.

Sagittis vitae et leo duis ut diam quam nulla porttitor. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Sollicitudin tempor id eu nisl nunc. Posuere ac ut consequat semper. Ultrices gravida dictum fusce ut placerat orci. Leo vel fringilla est ullamcorper eget. Pellentesque id nibh tortor id aliquet. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Ac turpis egestas integer eget aliquet nibh praesent tristique. In vitae turpis massa sed elementum tempus egestas. Sagittis orci a scelerisque purus semper eget duis at. Tortor pretium viverra suspendisse potenti nullam. Turpis in eu mi bibendum neque egestas. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus.

Nisl rhoncus mattis rhoncus urna neque viverra justo. Nulla pellentesque dignissim enim sit. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. In fermentum et sollicitudin ac orci phasellus. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Orci phasellus egestas tellus rutrum tellus. Vel quam elementum pulvinar etiam non quam lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Lorem sed risus ultricies tristique nulla aliquet. Non pulvinar neque laoreet suspendisse. Felis bibendum ut tristique et egestas quis ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Proin nibh nisl condimentum id. Suspendisse faucibus interdum posuere lorem. Mi eget mauris pharetra et ultrices. Morbi blandit cursus risus at. Elementum integer enim neque volutpat ac. Nunc non blandit massa enim.

Lacinia quis vel eros donec ac odio tempor. Blandit aliquam etiam erat velit scelerisque in dictum. Ipsum a arcu cursus vitae congue mauris. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Eu volutpat odio facilisis mauris. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Leo integer malesuada nunc vel. Sodales ut eu sem integer. Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra. Viverra accumsan in nisl nisi scelerisque eu ultrices.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Mattis enim ut tellus elementum sagittis vitae et leo. Quam pellentesque nec nam aliquam. Enim tortor at auctor urna nunc. Ac auctor augue mauris augue neque gravida in fermentum et. Amet luctus venenatis lectus magna fringilla. In aliquam sem fringilla ut morbi tincidunt augue. Facilisi morbi tempus iaculis urna id volutpat. Nisl vel pretium lectus quam id. Lectus sit amet est placerat. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Vel orci porta non pulvinar neque. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Vestibulum morbi blandit cursus risus. In ante metus dictum at. Scelerisque felis imperdiet proin fermentum leo.

Nunc sed velit dignissim sodales. Nam libero justo laoreet sit amet cursus sit amet dictum. Integer eget aliquet nibh praesent tristique magna. Mi proin sed libero enim. Morbi tincidunt augue interdum velit euismod. Mi quis hendrerit dolor magna eget est. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Enim neque volutpat ac tincidunt vitae semper. Aliquet nibh praesent tristique magna sit amet. Vitae justo eget magna fermentum iaculis eu.

Sagittis vitae et leo duis ut diam quam nulla porttitor. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Sollicitudin tempor id eu nisl nunc. Posuere ac ut consequat semper. Ultrices gravida dictum fusce ut placerat orci. Leo vel fringilla est ullamcorper eget. Pellentesque id nibh tortor id aliquet. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Ac turpis egestas integer eget aliquet nibh praesent tristique. In vitae turpis massa sed elementum tempus egestas. Sagittis orci a scelerisque purus semper eget duis at. Tortor pretium viverra suspendisse potenti nullam. Turpis in eu mi bibendum neque egestas. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus.

Nisl rhoncus mattis rhoncus urna neque viverra justo. Nulla pellentesque dignissim enim sit. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. In fermentum et sollicitudin ac orci phasellus. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Orci phasellus egestas tellus rutrum tellus. Vel quam elementum pulvinar etiam non quam lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada. Lorem sed risus ultricies tristique nulla aliquet. Non pulvinar neque laoreet suspendisse. Felis bibendum ut tristique et egestas quis ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Proin nibh nisl condimentum id. Suspendisse faucibus interdum posuere lorem. Mi eget mauris pharetra et ultrices. Morbi blandit cursus risus at. Elementum integer enim neque volutpat ac. Nunc non blandit massa enim.

Lacinia quis vel eros donec ac odio tempor. Blandit aliquam etiam erat velit scelerisque in dictum. Ipsum a arcu cursus vitae congue mauris. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Eu volutpat odio facilisis mauris. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Leo integer malesuada nunc vel. Sodales ut eu sem integer. Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra. Viverra accumsan in nisl nisi scelerisque eu ultrices.
      </div>
      <p className="read-the-docs" ref={ref}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
