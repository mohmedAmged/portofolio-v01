import MyMainContent from "../myMainContentSec/MyMainContent";
import MyNavigationBar from "../myNavigationBarSec/MyNavigationBar";

export default function MyLayout() {
    return (
        <>
            <div className="row">
                <div className="col-md-2 p-0">
                    <MyNavigationBar />

                </div>
                <div className="col-md-10 position-relative p-0">
                    <MyMainContent />
                </div>
            </div>
        </>
    )
}
