import React from 'react'
import Image from './assets/image/wedding.jpg'
import './styles.css'

function App() {
  return (
    <div className='App bg-gray-100 min-h-screen font-sans'>
      <div className='bg-white flex justify-around py-4'>
        <span>Home</span>
        <span>Our Stories</span>
        <span>Wedding</span>
        <span className='relative'>
          <div className='absolute bg-white p-3 rounded-b-full  -ml-5 -mt-2'>
            <svg
              id='Capa_1'
              enable-background='new 0 0 512 512'
              className='w-12 h-12'
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path d='m382.259 148.407c.058.001.115.001.173.001.06 0 .119 0 .179-.001l63.302-1.134c5.382-.097 9.723-4.437 9.819-9.819l1.134-63.324c.002-.123.002-.246 0-.368-.441-23.401-19.823-42.768-43.197-43.172-19.912-.33-36.224 15.538-38.03 36.573-20.688 1.844-36.901 18.457-36.583 38.044.44 23.415 19.821 42.795 43.203 43.2zm-3.618-61.401.538-.017c4.482-.139 8.715-.271 12.334-3.852 3.648-3.609 3.802-8.041 3.951-12.328l.022-.626c.326-9.486 7.108-19.6 17.537-19.6.096 0 .194 0 .292.002 12.475.216 23.221 10.907 23.55 23.386l-.958 53.477-53.463.958c-12.675-.306-23.154-10.849-23.393-23.551-.172-10.603 10.048-17.521 19.59-17.849z' />
                <path d='m100.776 59.927c1.299 4.333 5.272 7.131 9.575 7.131.951 0 1.918-.137 2.875-.424 5.291-1.586 8.293-7.16 6.707-12.45l-9.408-31.379c-1.586-5.29-7.161-8.292-12.45-6.707-5.291 1.586-8.293 7.16-6.707 12.45z' />
                <path d='m41.263 93.249c3.391 0 6.698-1.726 8.575-4.842 2.85-4.731 1.325-10.876-3.406-13.726l-29.271-17.631c-4.731-2.85-10.876-1.325-13.725 3.407-2.85 4.731-1.325 10.876 3.406 13.726l29.27 17.631c1.615.972 3.393 1.435 5.151 1.435z' />
                <path d='m178.129 49.865c1.391.665 2.858.979 4.304.979 3.732 0 7.313-2.099 9.03-5.691l14.735-30.84c2.381-4.983.271-10.953-4.712-13.334-4.98-2.38-10.953-.271-13.334 4.712l-14.735 30.84c-2.381 4.983-.272 10.953 4.712 13.334z' />
                <path d='m484.474 417.127c3.898-8.016 7.169-16.354 9.742-24.931 14.315-47.763 6.568-98.896-21.256-140.287-3.082-4.584-9.295-5.801-13.878-2.72-4.583 3.082-5.801 9.295-2.72 13.878 24.473 36.405 31.287 81.377 18.698 123.383-1.48 4.932-3.233 9.771-5.216 14.504-4.33-9.558-12.065-17.032-21.409-20.603.186-.587.382-1.175.558-1.76 18.784-62.616-16.852-128.843-79.435-147.631-17.898-5.382-36.82-6.438-55.08-3.142-7.861-7.925-16.578-15.055-26.023-21.321 28.6-9.797 59.547-10.455 88.943-1.617 4.599 1.37 9.238 3.012 13.789 4.881 5.107 2.099 10.951-.342 13.05-5.45s-.341-10.951-5.45-13.05c-5.166-2.122-10.442-3.989-15.655-5.542-38.948-11.711-80.322-8.756-117.073 8.244-23.406-10.839-48.608-15.973-73.932-15.246l18.185-48.717c1.363-3.652.479-7.765-2.264-10.535l-37.006-37.36c-2.601-2.626-6.439-3.604-9.98-2.54l-80.614 24.207c-3.54 1.063-6.205 3.992-6.93 7.616l-10.316 51.562c-.765 3.823.762 7.742 3.911 10.04l41.996 30.643c-24.372 15.092-44.485 36.367-58.438 62.299-20.986 39.003-25.532 83.845-12.8 126.271 1.05 3.495 2.234 6.963 3.515 10.383-.444.414-.879.842-1.304 1.283-16.247 16.84-16.247 44.242 0 61.082.082.085.166.169.251.251l45.563 43.993c1.937 1.871 4.441 2.806 6.946 2.806s5.011-.936 6.948-2.808l18.981-18.338c24.135 12.836 50.984 19.433 77.995 19.433 15.97 0 31.996-2.3 47.537-6.965 7.481-2.265 14.777-5.032 21.762-8.232 6.954 3.203 14.202 5.975 21.74 8.239 15.633 4.693 31.684 7.02 47.684 7.02 23.979 0 47.836-5.244 69.984-15.571l60.99 1.092c.06.001.12.001.18.001.063 0 .125 0 .188-.002 23.395-.441 42.758-19.828 43.161-43.209.289-15.917-10.375-29.881-25.518-35.534zm-392.524-295.926 69.109-20.752 21.063 21.264-96.042 28.833zm3.216 47.499 89.367-26.829-14.553 38.986c-7.045 1.162-14.063 2.776-21.015 4.864-6.942 2.083-13.678 4.597-20.19 7.502zm-26.882 106.708c14.54-27.024 36.684-48.299 63.659-61.583.101-.048.201-.094.301-.146 7.169-3.51 14.673-6.464 22.471-8.804 37.293-11.201 76.708-7.205 110.985 11.249 34.278 18.455 59.321 49.165 70.518 86.476 14.185 47.219 3.201 98.932-28.605 136.441-.16-.047-.322-.089-.482-.137-9.227-2.77-17.745-6.786-25.435-11.8 29.748-30.619 40.924-75.112 28.454-116.678-9.099-30.331-29.465-55.302-57.347-70.312-27.879-15.009-59.926-18.26-90.238-9.156-30.326 9.104-55.292 29.474-70.298 57.356-15.009 27.887-18.255 59.949-9.143 90.273 2.508 8.371 5.911 16.374 10.126 23.915-.134.11-.272.213-.405.324-9.715-8.145-22.133-11.206-33.432-9.166-.854-2.384-1.656-4.79-2.383-7.211-11.198-37.305-7.201-76.741 11.254-111.041zm197.787 139.045c-24.93-24.833-35.777-62.271-24.976-98.276 4.772-15.891 13.345-30.124 24.974-41.627 11.544 11.433 20.125 25.626 24.924 41.624 10.542 35.143.753 72.795-24.922 98.279zm-63.931 28.474c-15.146.846-30.365-1.825-44.396-7.864.163-11.277-3.886-22.609-12.169-31.195-8.886-9.212-21.87-12.527-34.247-9.997-3.799-6.594-6.835-13.639-9.05-21.03-7.576-25.213-4.878-51.865 7.598-75.046 12.475-23.179 33.228-40.111 58.439-47.68 11.098-3.333 22.476-4.671 33.715-4.061-11.265 15.245-19.757 32.263-25.314 50.795-15.569 51.862-4.432 105.499 25.424 146.078zm-109.299 45.171-38.476-37.15c-8.748-9.193-8.711-24.049.112-33.194 7.368-7.638 19.471-5.305 26.443 1.22l.433.407c3.123 2.943 6.353 5.986 11.479 5.986 5.111 0 8.349-3.034 11.479-5.967l.437-.41c6.982-6.535 19.073-8.867 26.433-1.237 8.822 9.145 8.859 24.001.111 33.194zm145.69-3.924c-34.663 10.404-72.063 7.406-104.534-8.03l11.329-10.945c.084-.082.167-.165.249-.249 2.994-3.104 5.432-6.568 7.322-10.257 13.971 5.556 28.84 8.394 43.777 8.394 7.03 0 14.075-.637 21.047-1.902 7.811 7.915 16.475 15.075 25.884 21.349-1.681.573-3.371 1.124-5.074 1.64zm55.027 0c-76.981-23.119-120.803-104.572-97.686-181.577 5.884-19.622 15.504-37.301 28.606-52.648 6.459 1.918 12.771 4.509 18.843 7.778 2.432 1.309 4.779 2.73 7.07 4.217-13.188 13.558-22.933 30.105-28.452 48.484-18.784 62.615 16.852 128.843 79.436 147.631 11.152 3.353 22.602 4.994 33.994 4.994 19.946-.001 39.699-5.05 57.32-14.752l.538 30.067c-31.513 13.623-66.659 15.715-99.669 5.806zm98.653-62.934c-.002.117-.002.234 0 .352l.061 3.429c-18.276 12.879-40.275 19.073-62.242 17.88 13.098-17.818 22.613-38.161 27.802-59.725 6.83-28.382 5.978-58.234-2.46-86.325-5.561-18.531-14.127-35.629-25.26-50.761 11.314-.609 22.73.732 33.69 4.027 52.027 15.619 81.65 70.676 66.034 122.731-.599 1.999-1.284 4.014-2.036 6.031-19.863 3.936-35.228 21.547-35.589 42.361zm74.412 54.629-53.454-.958-.957-53.485c.305-12.474 11.053-23.163 23.558-23.378.098-.002.194-.003.292-.003 10.42 0 17.204 10.115 17.529 19.574l.017.54c.133 4.309.271 8.765 3.896 12.392 3.627 3.629 8.083 3.768 12.392 3.901l.515.016c9.569.329 19.778 7.24 19.587 17.839-.22 12.698-10.69 23.233-23.375 23.562z' />
                <path d='m424.435 218.86c-2.47 4.94-.468 10.947 4.472 13.416l.057.028c1.432.716 2.952 1.055 4.447 1.055 3.664 0 7.187-2.034 8.941-5.541 2.47-4.94.439-10.961-4.5-13.431-4.94-2.469-10.948-.466-13.417 4.473z' />
              </g>
            </svg>
          </div>
        </span>
        <span>Gallery</span>
        <span>Congratulation</span>
        <span>Invitation</span>
      </div>

      <div
        className='h-screen bg-cover flex flex-col items-center justify-center'
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <div className='text-white text-3xl text-center mb-10'>
          <p className='font-light italic'>
            Hallo Zulhan, kamu telah diundang ke acara pernikahan{' '}
          </p>
          <p className='font-bold'>Jhon Doe dan Jane Doe</p>
          <p className='font-light italic'>
            Sabtu, 29 February 2020, Gedung Keren
          </p>
        </div>

        <div>
          <button className='bg-white px-8 py-3 rounded-lg'>
            Pasang Reminder
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
