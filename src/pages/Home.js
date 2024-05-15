import React from "react";
import TypeIt from "typeit-react";
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

class Home extends React.Component{
    // eslint-disable-next-line react/require-render-return
    render(){
        return(
            <div>
            <div id="header">
            <div class="container">
              <nav>
                <img src="images/logo1.png" alt="" class="logo" />
      
                <ul id="sidemenu">
                  <li><a href="#header">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#portofolio">Portofolio</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <i class="fas fa-times" onclick="closemenu()"></i>
                </ul>
                <i class="fas fa-bars" onclick="openmenu()"></i>
              </nav>
              <div class="header-text">
              <TypeIt
        options={{
          strings: ["Software Developer"],
          speed: 100,
          waitUntilVisible: true,
          loop: true
        }}
      />
                <h1>
                  HI, i'm <span> Bagas Pratama </span> <br />
                  From Indonesia
                </h1>
              </div>
            </div>
          </div>
          
          
      
          <div id="about">
            <div class="container">
              <div class="row">
                <div class="about-col-1" >
                <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
                  <img src="images/user1.png" alt="" />
                  </Tilt>
                </div>
                <div class="about-col-1">
                  <h1 class="sub-title">About Me</h1>
                  <p>
                    Perkenalkan nama saya Bagas saya anak pertama dari empat
                    bersaudara. Saya memiliki background IT karena saya sendiri
                    lulusan dari UNS jurusan Teknik Informatika. Saya suka melakukan
                    hal baru dan mudah berbaur dengan siapapun.
                  </p>
      
                  <div class="tab-title">
                    <p class="tab-links active-link" onclick="opentab('skills')">
                      Skills
                    </p>
                    <p class="tab-links" onclick="opentab('experience')">
                      Experience
                    </p>
                    <p class="tab-links" onclick="opentab('education')">Education</p>
                  </div>
                  <div class="tab-contents active-tab" id="skills">
                    <ul>
                      <li><span>UI/UX</span><br />Design Web/App Interface</li>
                      <li><span>Web Development</span><br />Web App Development</li>
                      <li>
                        <span>App Development</span><br />Build android/IOS apps
                      </li>
                    </ul>
                  </div>
                  <div class="tab-contents" id="experience">
                    <ul>
                      <li>
                        <span>PT Pindad</span><br />Game Virtual Reality Developer
                      </li>
                      <li>
                        <span>PT Cipta Solusi Mandiri</span><br />Front End Developer
                      </li>
                      <li><span>PKM</span><br />Building android/IOS apps</li>
                    </ul>
                  </div>
                  <div class="tab-contents" id="education">
                    <ul>
                      <li>
                        <span>Binus University</span><br />Sedang Berlangsung <br />
                        Teknik Informatika
                      </li>
                      <li>
                        <span>Universitas Sebelas Maret (UNS)</span><br />2020-2024
                        <br />
                        Teknik Informatika
                      </li>
                      <li><span>SMAN 56 Jakarta</span><br />2016-2019 <br />IPA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          
          <div id="services">
            <div class="container">
              <h1 class="sub-title">My Services</h1>
              <div class="services-list">
                <div>
                  <i class="fas fa-code"></i>
                  <h2>Web Developer</h2>
                  <p>
                    Saya dapat mengerjakan sebuah website mulai dari yang saya buat
                    atau saya kembangkan. Saya memiliki pengelaman menjadi frontend
                    selama 6 bulan di perusahaan yang bergerak dibagian IT.Project
                    yang saya kembangkan berupa website antrian pada polres pati jawa
                    tengah
                  </p>
                  <a href="#">Learn more</a>
                </div>
                <div>
                  <i class="fas fa-crop-alt"></i>
                  <h2>UI/UX Design</h2>
                  <p>
                    Saya suka sekali dengan desain, mulai dari mendesain sebuah
                    website atau tidak berkaitan dengan IT. Saya memiliki pengalaman
                    menjadi UI/UX cukup lama dan sudah 3 project yang saya buat
                    menggunakan UI/UX dari saya
                  </p>
                  <a href="#">Learn more</a>
                </div>
                <div>
                  <i class="fab fa-app-store"></i>
                  <h2>Apps Design</h2>
                  <p>
                    Saya memiliki pengalaman membuat android/IOS apps. Sudah memiliki
                    pengalaman sekitar 6 bulan yaitu membuat satu project yang
                    berkaitan dengan kurikulum merdeka. Ini adalah bagian yang saya
                    ingin tekuni hingga menjadi profesional mobile developer.
                  </p>
                  <a href="#">Learn more</a>
                </div>
              </div>
            </div>
          </div>
      
        
          <div id="portofolio">
            <div class="container">
              <h1 class="sub-title">My Work</h1>
              <div class="work-list">
                <div class="work">
                  <img src="images/work-1.png" alt="" />
                  <div class="layer">
                    <h3>SmartEdu-P5 App</h3>
                    <p>
                      Merupakan project Android/IOS berupa aplikasi untuk membantu
                      siswa dan pengajar dalam berjalannya kurikulum merdeka
                    </p>
                    <a href="https://github.com/badaso404/smartedu5p"
                      ><i class="fas fa-external-link-alt"></i
                    ></a>
                  </div>
                </div>
                <div class="work">
                  <img src="images/work-2.png" alt="" />
                  <div class="layer">
                    <h3>Sistem Antrian Abhipraya</h3>
                    <p>
                      Project ini merupakan sistem antrian polres pati berupa website
                      yang dibuat dengan bahasa laravel
                    </p>
                    <a href="https://github.com/badaso404/Sistem-Antrian"
                      ><i class="fas fa-external-link-alt"></i
                    ></a>
                  </div>
                </div>
                <div class="work">
                  <img src="images/work-3.png" alt="" />
                  <div class="layer">
                    <h3>Simulator VR</h3>
                    <p>
                      Merupakan project simulator VR dengan konten berupa menembak
                      sebuah target tembak menggunakan senjata yang sudah disesuaikan
                      dengan PT.Pindad yaitu menggunakan senjata G2 Elite.
                    </p>
                    <a
                      href="https://gitd3ti.vokasi.uns.ac.id/Bagas/game-simulator-senjata"
                      ><i class="fas fa-external-link-alt"></i
                    ></a>
                  </div>
                </div>
              </div>
              <a href="https://github.com/badaso404?tab=repositories" class="btn"
                >See More</a
              >
            </div>
          </div>
      
          {/* <!-- CONTACT --> */}
          <div id="contact">
            <div class="container">
              <div class="row">
                <div class="contact-left">
                  <h1 class="sub-title">Contact Me</h1>
                  <p><i class="fas fa-paper-plane"></i>bgsprtm56@gmail.com</p>
                  <p><i class="fas fa-phone-square"></i>081356896765</p>
                  <div class="social-icons">
                    <a href="https://web.facebook.com/"
                      ><i class="fab fa-facebook"></i
                    ></a>
                    <a href="https://www.instagram.com/"
                      ><i class="fab fa-instagram"></i
                    ></a>
                    <a href="https://www.linkedin.com/"
                      ><i class="fab fa-linkedin"></i
                    ></a>
                  </div>
                  <a href="images/my-cv.pdf" download class="btn btn2">Download CV</a>
                </div>
                <div class="contact-right">
                  <form name="submit-to-google-sheet">
                    <input type="text" name="Name" placeholder="Your Name" required />
                    <input
                      type="email"
                      name="Email"
                      placeholder="Your Email"
                      required
                    />
                    <textarea
                      name="Message"
                      rows="6"
                      placeholder="Your Massege"
                    ></textarea>
                    <button type="submit" class="btn btn2">Submit</button>
                  </form>
                  <span id="msg"></span>
                </div>
              </div>
            </div>
            <div class="copyright">
              <p>
                Copyright © Bagas. Made with <i class="fas fa-heart"></i> by Bagas
                Pratama
              </p>
            </div>
          </div>
          </div>
        )
    }
}

export default Home;