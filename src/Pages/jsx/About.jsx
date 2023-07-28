import "./../css/About.css";
import banner from "./../assets/banner.png";

const About = () => {
  return (
    <div className="about">
      <div><img className="banner-icon" alt="" src={banner} /></div>
      <div className="main-layout">
        <div className="container-content">
          <div className="reason-why">
            <div className="About-big-questions" id="why-are-we-here">WHY ARE WE HERE?</div>
            <div className="answer">
              Within the esteemed walls of VNUHCM High School for the Gifted, there dwelled a certain individual, consumed by a thirst for knowledge. He would make numerous attempts to publish his research papers, only to find himself at a crossroads. Then, on the fateful evening of April 30th, inspiration struck: why not create his own platform? Gathering like-minded individuals, Initiare came to life. Initially comprised of only three members—the president, the programming chair, and the PR chair—the team grows exponentially with the help of professors, and students eager to be part of something greater. Initiare becomes a vibrant and effective platform, a welcoming home for science enthusiasts. And now, this extraordinary community seeks new members, extending a hopeful invitation to you. 
              <b> Will you answer our call?</b>
            </div>
          </div>
          <div className="reason-why">
            <div className="About-big-questions" id="what-are-we-doing">WHAT ARE WE DOING?</div>
            <div className="answer">
              We are InitiaRe, your gateway to a world of research excellence!
              Our mission is to revolutionize the academic landscape by
              providing an accessible and dynamic platform designed specifically
              for students. With InitiaRe, you can unlock the power of
              professional research, exchange ideas, and discover reliable
              sources effortlessly. Whether you're an aspiring author looking to
              publish your work or a curious mind seeking fresh inspiration, our
              versatile platform has you covered. InitiaRe, derived from the
              Latin word for "initiate," serves as your starting point on the
              exciting journey of research and knowledge pursuit. Join our
              research family of like-minded individuals, and together, let's
              unleash the transformative power of research for students
              nationwide. Embrace InitiaRe and initiate your research revolution
              today!
            </div>
          </div>
          <div className="reason-why">
            <div className="About-big-questions" id="terms-of-use">TERMS OF USE</div>
            <div className="answer">
              <p className="terms-of-use-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
                magnis dis parturient montes nascetur ridiculus mus mauris.
                Ipsum dolor sit amet consectetur adipiscing elit. Etiam sit amet
                nisl purus in mollis nunc sed id. Sagittis aliquam malesuada
                bibendum arcu vitae elementum. Nam at lectus urna duis convallis
                convallis. Ullamcorper a lacus vestibulum sed arcu non odio.
                Velit aliquet sagittis id consectetur purus ut faucibus.
                Sagittis orci a scelerisque purus semper eget duis. Et netus et
                malesuada fames. A cras semper auctor neque. Odio aenean sed
                adipiscing diam donec adipiscing tristique risus nec.
              </p>
              <p className="terms-of-use-content">
                Ipsum dolor sit amet consectetur adipiscing elit pellentesque
                habitant. Eu scelerisque felis imperdiet proin fermentum leo vel
                orci porta. Purus viverra accumsan in nisl nisi. Sed vulputate
                mi sit amet mauris commodo quis imperdiet. A diam maecenas sed
                enim. Pellentesque elit ullamcorper dignissim cras tincidunt
                lobortis feugiat. Ut tortor pretium viverra suspendisse potenti
                nullam ac tortor vitae. Odio eu feugiat pretium nibh ipsum
                consequat nisl. Sed ullamcorper morbi tincidunt ornare massa
                eget. Eu turpis egestas pretium aenean. Odio pellentesque diam
                volutpat commodo sed. Tortor vitae purus faucibus ornare
                suspendisse. Risus nec feugiat in fermentum posuere urna nec
                tincidunt praesent. Quam id leo in vitae turpis. Dis parturient
                montes nascetur ridiculus mus mauris. Eget est lorem ipsum dolor
                sit amet.
              </p>
              <p className="terms-of-use-content">
                Malesuada fames ac turpis egestas integer eget. Leo vel orci
                porta non. Cursus risus at ultrices mi tempus imperdiet nulla.
                Mauris cursus mattis molestie a iaculis at erat pellentesque
                adipiscing. Tortor id aliquet lectus proin nibh nisl
                condimentum. Eget duis at tellus at urna condimentum mattis.
                Sagittis purus sit amet volutpat consequat mauris. Leo urna
                molestie at elementum eu facilisis sed odio. Nisi vitae suscipit
                tellus mauris a. Egestas pretium aenean pharetra magna ac
                placerat vestibulum. Massa id neque aliquam vestibulum morbi
                blandit. Eget gravida cum sociis natoque penatibus et. Sit amet
                nisl purus in mollis. At lectus urna duis convallis convallis
                tellus id. Gravida in fermentum et sollicitudin ac orci.
              </p>
            </div>
          </div>
        </div>
        <div className="sections">
          <div className="line" />
          <div className="container1">
            <div className="point-div"><a className="point" href="#why-are-we-here">Why are we here?</a></div>
            <div className="point-div"><a className="point" href="#what-are-we-doing">What are we doing?</a></div>
            <div className="point-div"><a className="point" href="#terms-of-use">Terms of use</a></div>
          </div>
        </div>
        <br style={{clear: 'both'}}/> {/* DO NOT DELETE THIS LINE-BREAK*/}
        {/* WHY? TL:DR IT'D BREAK THE FOOTER */}
        {/* I needed .content-container and .sections to be on different columns.
         The modern way to do this is to use either Flexbox or CSS Grid. I thought
          doing so would be far too complicated and likely overkill for such a 
          simple implementation. I was wrong.
          I used the old method - float. It looked like it worked, but turns out
          a div does not expand to fit floated child elements, meaning the parent
          div containing everything does not expand to fit .content-container and
          .sections, and it would only be the size of div containing the image,
          as that was not floated. I was aware of this since way before, but decided
          that it was not an issue. I would later find that it was.
          The first sign of trouble came when the Navbar would not remain in its
          fixed position at the top of the screen when scrolling past the image.
          This is because we were using position: sticky and putting it at the
          top of the screen instead of the doing it the proper way and using
          position: fixed, as that would cause other problems related to
          scrolling. This entire debacle would eventually be sidestepped altogether
          when I implemented the auto-hiding Navbar. 
          But the actual issue had still not been addressed, and it would come up
          again when I tried to implement a Footer. You see, the Footer has to be
          below the entire page, so it has to clear (foreshadowing) everything on
          the page. The problem was that the page was not expanding to fit
          .content-container and .sections, meaning those elements were overflowing
          and the wrapping div itself was only a few hundred pixels in height,
          as it only expanded to fit the image's div. This meant the Footer would
          sit right in the middle of the page.
          But I would eventually find a solution, which is seen right above this
          overly lengthy comment. Apparently you need to add an element - any
          element - that does not float and make it go below (i.e. clear) the
          floating ones, which is why I have added a line-break with some
          inline styles, doing exactly that. */}
      </div>
    </div>
  );
};

export default About;
