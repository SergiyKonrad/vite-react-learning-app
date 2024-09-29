import { useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function EffectVideoSection() {
  const [modalOpen, setModalOpen] = useState(false)

  function openModal() {
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  return (
    <section>
      <h3 style={{ marginTop: '1.8em' }}>Recommended YouTube Video</h3>

      <Button onClick={openModal}>Click to Open</Button>

      <Modal open={modalOpen} onClose={closeModal}>
        <div className="modal-content">
          <h2>Explore and Learn with These Videos!</h2>
          <p>
            Discover the best tutorials to enhance your skills in React, Vite,
            and JavaScript.<br></br>
            <strong>Click the links below to watch the videos:</strong>
          </p>
          <div className="button-group">
            <Button>
              <a
                href="https://www.youtube.com/watch?v=GcrNHMcL-WM&list=PLnHJACx3NwAep5koWkniVHw8PK7dWCO21?start=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                React 18 Tutorial
              </a>
            </Button>

            <Button>
              <a
                href="https://www.vuemastery.com/courses/lightning-fast-builds-with-vite/intro-to-vite/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite - Intro
              </a>
            </Button>

            <Button>
              <a
                href="https://www.youtube.com/watch?v=EerdGm-ehJQ&list=PL5gGgfZCLFbeBC2Bsf7kc4Vq3Gzj7EmBl&index=6?start=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript Tutorial
              </a>
            </Button>
          </div>

          <Button onClick={closeModal} className="close-button">
            Click to Close
          </Button>
        </div>
      </Modal>
    </section>
  )
}
