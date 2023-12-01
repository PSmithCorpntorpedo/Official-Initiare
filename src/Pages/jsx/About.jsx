import aboutcss from "./../css/about.module.css";
import banner from "./../assets/banner.png";

const About = () => {
  return (
    <div className={aboutcss["about"]}>
      <div>
        <img className={aboutcss["banner-icon"]} alt="" src={banner} />
      </div>
      <div className={aboutcss["main-layout"]}>
        <div className={aboutcss["container-content"]}>
          <div className={aboutcss["reason-why"]}>
            <div
              className={aboutcss["About-big-questions"]}
              id="why-are-we-here"
            >
              WHY ARE WE HERE?
            </div>
            <div className={aboutcss["answer"]}>
              Within the esteemed walls of VNUHCM High School for the Gifted,
              there dwelled a certain individual, consumed by a thirst for
              knowledge. He would make numerous attempts to publish his research
              papers, only to find himself at a crossroads. Then, on the fateful
              evening of April 30th, inspiration struck: why not create his own
              platform? Gathering like-minded individuals, Initiare came to
              life. Initially comprised of only three members—the president, the
              programming chair, and the PR chair—the team grows exponentially
              with the help of professors, and students eager to be part of
              something greater. Initiare becomes a vibrant and effective
              platform, a welcoming home for science enthusiasts. And now, this
              extraordinary community seeks new members, extending a hopeful
              invitation to you.
              <b> Will you answer our call?</b>
            </div>
          </div>
          <div className={aboutcss["reason-why"]}>
            <div
              className={aboutcss["About-big-questions"]}
              id="what-are-we-doing"
            >
              WHAT ARE WE DOING?
            </div>
            <div className={aboutcss["answer"]}>
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
          <div className={aboutcss["reason-why"]}>
            <div className={aboutcss["About-big-questions"]} id="terms-of-use">
              TERMS OF USE
            </div>
            <div className={aboutcss["answer"]}>
              <p className={aboutcss["terms-of-use-content"]}>
              InitiaRe là nền tảng được xây dựng mô phỏng một tạp chí nghiên cứu thực tế. Khi đăng tải nội dung lên InitiaRe, người dùng đồng thuận với việc công khai các sản phẩm của bản thân (Lưu ý: việc công khai không áp dụng cho Proposal và Report)
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Người dùng được phép tìm kiếm, xem, lưu, chụp ảnh màn hình, tải về và in các bài nghiên cứu trên trang web.
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Người dùng được tự do khai thác thông tin, tự do trao đổi, bình luận về các nội dung trên trang web InitiaRe.
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Người dùng được InitiaRe bảo mật thông tin khi đăng ký tài khoản
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Người dùng cam kết không cho phép nhiều người cùng sử dụng tài khoản. InitiaRe sẽ không chịu trách nhiệm nếu có bất kì tổn hại về tài khoản gây ra bởi việc nhiều người sử dụng.
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Người dùng cam kết không đăng tải lại các bài nghiên cứu đã xuất bản trên trang web InitiaRe
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Người dùng cam kết không đăng tải nội dung trong các bài nghiên cứu trên trang web mà không có trích dẫn nguồn gốc của bài tham khảo
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Người dùng cam kết không sử dụng các nguồn tài liệu trang web với mục đích truyền thông, thương mại, kinh doanh
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Người dùng cam kết không đăng tải bài nghiên cứu thay người khác
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Người dùng tự chịu trách nhiệm về năng lực hành vi trong việc đăng ký tài khoản và sử dụng website
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Người dùng bắt buộc cung cấp đầy đủ, chính xác thông tin cá nhân khi đăng ký tài khoản ở trang web InitiaRe
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Người dùng không được phép sử dụng trang web InitiaRe với mục đích chống lại Nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam; gây phương hại đến an ninh quốc gia, trật tự, an toàn xã hội; phá hoại khối đại đoàn kết toàn dân; tuyên truyền chiến tranh xâm lược, khủng bố; gây hận thù, mâu thuẫn giữa các dân tộc, sắc tộc, chủng tộc, tôn giáo; tuyên truyền, kích động bạo lực, dâm ô, đồi trụy, tội ác, tệ nạn xã hội, mê tín dị đoan, phá hoại thuần phong, mỹ tục của dân tộc
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Không được có bất kỳ hành vi nào nhằm đăng nhập trái phép hoặc tìm cách đăng nhập trái phép hoặc gây thiệt hại cho hệ thống máy chủ InitiaRe
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Người dùng hiểu rằng InitiaRe chưa được công nhận hoàn toàn là một tạp chí nghiên cứu theo <a href="https://chinhphu.vn/default.aspx?pageid=27160&docid=164963">Luật số 19/2012/QH13 của Quốc hội</a>
              </p>
              <p className={aboutcss["terms-of-use-content"]}>
              Việc nhấn vào ô “Tôi đồng ý với tất cả các điều khoản và điều kiện dành cho user mà InitiaRe đưa ra”, bạn chấp nhận và cam kết tuân theo các điều khoản trên. Mọi hành vi đi ngược với một trong những điều khoản trên đồng nghĩa với việc tài khoản của bạn vĩnh viễn bị xóa khỏi hệ thống InitiaRe
              </p>
            </div>
          </div>
        </div>
        <div className={aboutcss["sections"]}>
          <div className={aboutcss["line"]} />
          <div className={aboutcss["container1"]}>
            <div className={aboutcss["point-div"]}>
              <a className={aboutcss["point"]} href="#why-are-we-here">
                Why are we here?
              </a>
            </div>
            <div className={aboutcss["point-div"]}>
              <a className={aboutcss["point"]} href="#what-are-we-doing">
                What are we doing?
              </a>
            </div>
            <div className={aboutcss["point-div"]}>
              <a className={aboutcss["point"]} href="#terms-of-use">
                Terms of use
              </a>
            </div>
          </div>
        </div>
        <br style={{ clear: "both" }} /> {/* DO NOT DELETE THIS LINE-BREAK*/}
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
