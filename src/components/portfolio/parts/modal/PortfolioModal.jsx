import React from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalDescription,
} from "./PortfolioModal.style";

function PortfolioModal({ project, onClose }) {
  return (
    <Dialog open={true} onClose={onClose}>
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        <Swiper
          modules={[Navigation, Keyboard, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          // pagination={{ clickable: true }}
          pagination={{
            type: "fraction",
          }}
          keyboard={{
            enabled: true,
          }}
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.image} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <ModalDescription>{project.description}</ModalDescription>
      </ModalContent>
    </Dialog>
  );
}

export default PortfolioModal;
