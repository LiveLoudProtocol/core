// src/components/Editor.js
import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Image from 'next/image'
import EmojiPicker from 'emoji-picker-react'
import Popover from '@mui/material/Popover'

const InputBox = () => {
  const [value, setValue] = useState('')
  const [images, setImages] = useState([])
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleImageChange = (event) => {
    const newImages = Array.from(event.target.files)

    if (newImages.length > 0) {
      // Create previews for the selected images
      const promises = newImages.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => {
            resolve(reader.result)
          }
          reader.readAsDataURL(file)
        })
      })

      Promise.all(promises).then((imagePreviews) => {
        setImages([...images, ...imagePreviews])
      })
    }
  }

  const handleInsertImage = () => {
    // Use the selected images for further processing, e.g., storing in state or submitting
    // You can access the image data from the `images` state
    console.log('Selected images:', images)
  }

  const handleDeleteImage = (index) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  const updateTextareaHeight = () => {
    const textarea = document.getElementById('autoExpandTextarea')
    const maxHeight = 250 // Set your desired maxHeight here

    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value)
    updateTextareaHeight()
  }

  return (
    <div className="mr-5">
      <div class="flex overflow-y-auto max-h-[600px]">
        <div class="m-2 w-10 py-1">
          <Image
            class="inline-block h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
            alt=""
            width={140}
            height={140}
          />
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
            multiple
          />
        </div>
        <div class="flex-1 px-2 pt-2 mt-2">
          <textarea
            id="autoExpandTextarea"
            class="outline-none bg-transparent placeholder:text-gray-400 font-medium text-lg w-full"
            rows="2"
            cols="50"
            placeholder="What's happening?"
            onChange={handleChange}
            onInput={updateTextareaHeight}
            value={value}
          ></textarea>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative inline-block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                className="inline-block object-cover"
                src={image}
                alt={`Selected Image ${index + 1}`}
                width={446}
                height={303}
              />
              {hoveredIndex === index && (
                <button
                  onClick={() => handleDeleteImage(index)}
                  className="absolute top-0 right-0 p-1 bg-black opacity-70 hover:opacity-90 transition-all ease-in duration-100 py-3 px-2 text-red-500 rounded-bl-xl"
                >
                  Remove Image
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div class="flex">
        {/* <div class="w-10"></div> */}

        <div class="w- px-2">
          <div class="flex items-center">
            <div class="flex-1 text-center px-1 py-1 m-2">
              <button
                onClick={() => document.getElementById('imageInput').click()}
                href="#"
                class="mt-1 group flex items-center text-blue-400 px-1 py-1 text-base leading-6 font-medium rounded-full hover:scale-105 "
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>

            {/* <div class="flex-1 text-center py-2 m-2">
              <a
                href="#"
                class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:scale-105 "
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </a>
            </div> */}

            {/* <div class="flex-1 text-center py-2 m-2">
              <a
                href="#"
                class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:scale-105 "
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div> */}

            <div class="flex-1 text-center py-2 m-2">
              <button onClick={handleClick}
                href="#"
                class="mt-1 group flex items-center text-blue-400 px-1 py-1 text-base leading-6 font-medium rounded-full hover:scale-105 "
              >
                <svg
                  class="text-center h-7 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
            </div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <div>
                <EmojiPicker
                  onEmojiClick={(e) => {
                    console.log(e.emoji)
                    setValue(value + e.emoji)
                  }}
                />
              </div>
            </Popover>
          </div>
        </div>

        <div class="flex-1">
          <button class="bg-blue-400 mt-5 hover:bg-brand-600 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default InputBox
