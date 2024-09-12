import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Card } from "@mui/material";
import TickTackToe, {
  Square,
  Board,
  calculateWinner,
} from "../details/TickTackToe";

function Ck4() {
  return (
    <div className="ml-12 flex">
      <div className="ml-12">
        <p>Start editing to see some magic happen</p>
        <Card
          className="mt-8"
          variant="outlined"
          sx={{ width: 520, height: 300, border: "2px solid green" }}
        >
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onInit={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor.state);
            }}
          />
        </Card>
      </div>
      {/* games starts here */}
      <TickTackToe />
    </div>
  );
}

export default Ck4;
