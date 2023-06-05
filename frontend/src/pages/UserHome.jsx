import React from 'react'
// import { useSelector } from 'react-redux';
import { MDBCol, MDBContainer, MDBRow, MDBCard } from 'mdb-react-ui-kit';
import Header from '../components/Navbar/Header';


function UserHome() {
  // const { token } = useSelector((state) => state.auth);
  return (
    <div>
      <Header />
      <div style={{ width: '100%', height: '20%', borderRadius: '10px' }}>
        <img
          style={{ width: '100%', height: '80%', objectFit: 'contain', borderRadius: '2rem', marginTop: '7rem', padding: '.5rem' }}
          src="https://image.adsoftheworld.com/13b0dtgzz93edtwqpg1y216o2ip5"
          alt=""
        />
      </div>


      <div className="gradient-custom-2">
        <MDBContainer className="py-5 px-0 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="12" xl="12">
              <MDBCard style={{ marginTop: '2rem', padding: '2rem' }}>
                Photography <br /> is an art form and a means of capturing and preserving moments, scenes, and emotions through the use of a camera. It is a powerful medium that allows us to tell stories, convey messages, and evoke emotions through visual imagery. Whether it's capturing landscapes, portraits, wildlife, or events, photography offers a diverse range of possibilities for creative expression.

                Here are some key aspects of photography:

                Composition: Composition refers to the arrangement of elements within a photograph. It involves considering factors such as the rule of thirds, leading lines, symmetry, balance, and perspective to create visually appealing and impactful images.
                Lighting: Lighting plays a crucial role in photography. It can dramatically affect the mood, atmosphere, and overall quality of an image. Photographers often utilize natural light, artificial light, or a combination of both to achieve the desired lighting effects in their photographs.
                Exposure: Exposure determines the amount of light that enters the camera sensor or film. It affects the brightness, contrast, and detail in a photograph. Understanding and controlling exposure settings such as aperture, shutter speed, and ISO is essential for achieving properly exposed images.
                Focus and Depth of Field: Focus refers to the sharpness and clarity of the main subject in a photograph. Depth of field, on the other hand, refers to the area of the image that appears in focus. Photographers use selective focus and depth of field techniques to draw attention to specific subjects or create a sense of depth in their photos.
                Post-processing: Post-processing involves editing and enhancing photographs using software such as Adobe Photoshop, Lightroom, or other editing tools. It allows photographers to refine their images, adjust colors, contrast, sharpness, and apply creative effects to achieve their desired aesthetic.
                Genres and Styles: Photography encompasses a wide range of genres and styles. Some popular genres include landscape, portrait, wildlife, street, documentary, fashion, architectural, and macro photography. Each genre has its unique techniques, challenges, and opportunities for artistic expression.
                Equipment: While creativity and skill are essential, having the right equipment can enhance the quality of photographs. Cameras, lenses, tripods, filters, and lighting equipment are some common tools used by photographers. However, it's important to note that great photography is not solely dependent on expensive gear but also on the vision and creativity of the photographer.
                Photography is a constantly evolving field, influenced by technological advancements and individual perspectives. It offers a means to explore and capture the beauty, diversity, and complexity of the world around us. Whether pursued professionally or as a hobby, photography provides a wonderful medium for self-expression, storytelling, and sharing experiences with other
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  )
}

export default UserHome


