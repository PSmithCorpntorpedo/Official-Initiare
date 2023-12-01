import React/*, { useEffect, useState }*/ from "react";
import u6css from "./Stage6.module.css";
// import { /*faC,*/ faCheck } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePaperType from "../../../../Hooks/usePaperType";

export default function Stage6JSX({ setHasSelected }) {
  const { paperType } = usePaperType();
  
  const handleAgree = (e) => { 
      setHasSelected(e.target.checked)
  }

  return (
    <div className={`${u6css[`panel`]}`}>
      <p>
        Trước khi nộp, hãy đảm bảo rằng bài nghiên cứu của bạn thỏa mãn hết những nhu cầu sau đây:
      </p>
      <div className={`${u6css[`tickboxes`]}`}>
        {paperType === "Research Proposal" && (
          <>
            <Options
              name="Title (Tiêu đề)"
              content="Bài báo này nghiên cứu về vấn đề?"
            />
            <Options
              name="Author (Tác giả)"
              content="Liệt kê tất cả thành viên tham gia vào nghiên cứu và người hướng dẫn (corresponding author)."
            />
            <Options
              name="Abstract (Tóm tắt)"
              content="Tóm tắt ngắn gọn nội dung"
            />
            <Options
              name="Introduction (Giới thiệu)"
              content="Giới thiệu về nghiên cứu và tầm quan trọng của nó. Vì sao chúng ta cần quan tâm? Đặt bối cảnh, vấn đề, câu hỏi/mục tiêu nghiên cứu và giả thuyết (nếu có).
              "
            />
            <Options
              name="Literature Review"
              content="Cơ sở lý thuyết, các nghiên cứu trước đây trong chủ đề này. 
              Xác định những vấn đề chưa được giải quyết, còn mắc phải trong nghiên cứu.
              "
            />
            <Options
              name="Approach (Phương pháp)
              "
              content="Nêu rõ các thí nghiệm và phương pháp thu thập, phân tích dữ liệu dự đoán sẽ thực hiện."
            />
            <Options
              name="Expected Results (Kết quả dự kiến)
              "
              content="Trình bày kết quả dự kiến dựa trên dữ liệu đã thu thập và phân tích từ các nghiên cứu trước."
            />
            <Options
              name="Significance (Ý nghĩa nghiên cứu)
              "
              content="Việc thực hiện nghiên cứu này có ý nghĩa gì? Vì sao nó quan trọng? 
              Những vấn đề nào sẽ được giải quyết sau khi thực hiện nghiên cứu?
              "
            />
            <Options
              name="Ethics Declaration (Tuyên bố Cam đoan)
              "
              content="Đảm bảo rằng nghiên cứu sẽ thực hiện theo các nguyên tắc đạo đức và luân lý (đặc biệt đối với các nghiên cứu có sử dụng động vật hoặc con người)."
            />
            <Options
              name="References (Trích dẫn)"
              content="Trình bày các tài liệu, bài báo, sách,... đã tham khảo theo phong cách APA."
            />
            <Options
              name="Research Plan (Kế hoạch nghiên cứu) - Không bắt buộc
              "
              content="Trình bày một kế hoạch nghiên cứu gồm các mốc thời gian cho các hoạt động gồm thu thập dữ liệu, xem xét tài liệu, thí nghiệm, chạy mô hình…"
            />
            <Options
              name="Preliminary Data (Dữ liệu ban đầu) - Bắt buộc với B1
              "
              content="Những dữ liệu, kết quả thu được ở các bước đầu nghiên cứu."
            />
          </>
        )} 
        {paperType === "Research Report" && (
          <>
            <Options
              name="Title (Tiêu đề)"
              content="Bài báo này nghiên cứu về vấn đề?"
            />
            <Options
              name="Author (Tác giả)"
              content="Liệt kê tất cả thành viên tham gia vào nghiên cứu và người hướng dẫn (corresponding author)."
            />
            <Options
              name="Abstract (Tóm tắt)"
              content="Tóm tắt ngắn gọn nội dung"
            />
            <Options
              name="Introduction (Giới thiệu)"
              content="Giới thiệu về nghiên cứu và tầm quan trọng của nó. Vì sao chúng ta cần quan tâm? Đặt bối cảnh, vấn đề, câu hỏi/mục tiêu nghiên cứu và giả thuyết (nếu có)."
            />
            <Options
              name="Literature Review (Nghiên cứu tổng quan)"
              content="Cơ sở lý thuyết, các nghiên cứu trước đây trong chủ đề này. 
              Xác định knowledge gap."
            />
            <Options
              name="Methods (Phương pháp)"
              content="Nêu rõ các thí nghiệm và phương pháp thu thập, phân tích dữ liệu đã thực hiện."
            />
            <Options
              name="Results (Kết quả)"
              content="Trình bày kết quả dựa trên dữ liệu đã thu thập và phân tích.
              Dữ liệu gốc (raw data) hoặc chi tiết về phương pháp phân tích thống kê nên được đưa vào Phụ lục."
            />
            <Options
              name="Discussion (Thảo luận)"
              content="Kết quả nghiên cứu có ý nghĩa gì? Vì sao nó quan trọng? 
              Các vấn đề đã được giải quyết và chưa được giải quyết."
            />
            <Options
              name="Conclusion (Kết luận)"
              content="Tóm tắt các kết luận chính của nghiên cứu.
              Hướng cải thiện và định hướng nghiên cứu trong tương lai (optional)
              "
            />
            <Options
              name="References (Trích dẫn)"
              content="Trình bày các tài liệu, bài báo, sách,... đã tham khảo theo style APA."
            />
            <Options
              name="Acknowledgement (Lời cảm ơn)"
              content="Tri ân các cá nhân/tổ chức đã đóng góp cho quá trình nghiên cứu
              Cần chú ý đối tượng cảm ơn, ngôn ngữ, thứ tự cảm ơn"
            />
            <Options
              name="Author Contribution (Đóng góp của tác giả)"
              content="Mô tả ngắn gọn công lao và đóng góp cá nhân của mỗi tác giả vào nghiên cứu.
              Có thể gồm: Ai đã thiết kế nghiên cứu? Ai đã thu thập dữ liệu? Ai đã phân tích dữ liệu? Ai đảm bảo tính chuyên môn?"
            />
            <Options
              name="Ethics Declaration (Tuyên bố cam đoan)"
              content="Đảm bảo rằng nghiên cứu được thực hiện theo các nguyên tắc đạo đức và luân lý (đặc biệt đối với các nghiên cứu có sử dụng động vật hoặc con người)."
            />
            <Options
              name="Appendices (Phụ lục) - Không bắt buộc"
              content="Báo cáo nền, dữ liệu gốc, các phép tính toán chi tiết, v.v.."
            />
            <Options
              name="Supplemental Data (Dữ liệu bổ sung) - Không bắt buộc"
              content="Cung cấp thông tin hoặc dữ liệu bổ sung."
            />
            
          </>
        )}
      </div>
      <div className={`${u6css[`user-agreement`]}`}>
        <input type="checkbox" onClick={handleAgree} className={`${u6css[`agree-checkbox`]}`} id="I-agree"/>
        <label for="I-agree">
          <span>Tôi cam kết và chịu trách nhiệm rằng bài nghiên cứu của tôi đã gồm có những yếu tố nêu trên</span>
        </label>
      </div>
    </div>
  );
}

const Options = ({ name, content }) => {
  return (
    <div className={`${u6css[`option`]}`}>
        <span className={`${u6css[`content`]}`}>
          <span style={{"font-weight": "800", "color": "#2B52B7"}}>{name}</span>: {content}
        </span>
    </div>
  );
};
