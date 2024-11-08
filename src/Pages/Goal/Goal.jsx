import AuthLayout from "../../layout/AuthenticatedLayout";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import CardLabeled from "../../Components/CardLabeled";
import CardGoal from '../../Components/CardGoal';
import { useState } from "react";

function Goal() {

    const [isActive, setActive] = useState({
        sidebar: false
    })

    let fullName = "Jane Doe";

    try {
        const user = JSON.parse(localStorage.getItem("user"));
        fullName = user.name && user.email.split("@")[0].indexOf(".") > -1 ? user.email.split(".")[0] : user.email.split("@")[0].split(".")[0];
    } catch (error) {
        console.error(error)
    }

    return (
        <AuthLayout>
            <div className="w-full h-full flex flex-row overflow-x-hidden relative lg:static">
                <Sidebar isActive={isActive} setActive={setActive} />
                <div className="w-full h-full flex flex-col gap-4">
                    <Navbar name={fullName} setActive={setActive} />
                    <div className="w-full h-full max-h-full">
                        <div className="w-full h-full overflow-y-auto grid grid-flow-row lg:grid-cols-3">
                            <div className="w-full h-16 lg:hidden"></div>
                            <CardGoal title="Goal">

                            </CardGoal>
                            
                            <CardGoal title="Our Target"  className="lg:col-span-2">
                   
                               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusantium molestiae illo magni harum et delectus consequatur praesentium quos ex quis voluptate dolor facere optio reiciendis sit, doloribus magnam alias.</p>
                            </CardGoal>
                     
                            <CardGoal title="Expences Goal by Salary">

                            </CardGoal>
                            <CardGoal title="Expences Goal by Invest">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi blanditiis, consequuntur architecto magni inventore a laborum. Libero, ipsa aliquam, architecto laboriosam delectus nulla nesciunt fuga aliquid suscipit, consectetur quam tenetur!</p>
                            </CardGoal>
                            <CardGoal title="Expences Goal by Desire">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ratione.</p>
                            </CardGoal>
                            <CardGoal >
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consequatur iure voluptate vero nemo dolor neque pariatur ducimus mollitia earum magnam aspernatur itaque possimus, dolorem voluptatem, ad porro illo error.</p>
                            </CardGoal>
                            <CardGoal >
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consequatur iure voluptate vero nemo dolor neque pariatur ducimus mollitia earum magnam aspernatur itaque possimus, dolorem voluptatem, ad porro illo error.</p>
                            </CardGoal>
                            <CardGoal >
                               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consequatur iure voluptate vero nemo dolor neque pariatur ducimus mollitia earum magnam aspernatur itaque possimus, dolorem voluptatem, ad porro illo error.</p>
                            </CardGoal>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Goal;
