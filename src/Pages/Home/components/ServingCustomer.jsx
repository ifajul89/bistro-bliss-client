import ServingCustomer1 from "../../../assets/servingCustomer1.jpg";
import ServingCustomer2 from "../../../assets/servingCustomer2.jpg";

const ServingCustomer = () => {
    return (
        <div className="container mx-auto py-5 md:py-10">
            <div className="border-4 p-20 rounded-b-3xl rounded-t-[50px] grid grid-cols-5 gap-10">
                <div className="col-span-2 gap-10 flex flex-col items-center">
                    <h3 className="py-3 px-4 text-lg font-cursive semibold bg-white rounded-2xl border-4 inline-block ">
                        SERVING CUSTOMER
                    </h3>
                    <div>
                        <img
                            className="w-full rounded-2xl"
                            src={ServingCustomer1}
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-span-3 flex flex-col gap-10 items-center">
                    <div>
                        <img
                            className="w-full rounded-2xl"
                            src={ServingCustomer2}
                            alt=""
                        />
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-lg">OVER THE YEARS</h3>
                        <div className="flex gap-20">
                            <div>
                                <h3 className="text-5xl font-semibold text-[#F2A64D]">
                                    30+
                                </h3>
                                <p className="font-medium text-gray-600">
                                    BREAKFAST
                                    <br />
                                    OPTIONS
                                </p>
                            </div>
                            <div>
                                <h3 className="text-5xl font-semibold text-[#F2A64D]">
                                    50+
                                </h3>
                                <p className="font-medium text-gray-600">
                                    DINNER
                                    <br />
                                    OPTIONS
                                </p>
                            </div>
                            <div>
                                <h3 className="text-5xl font-semibold text-[#F2A64D]">
                                    8+
                                </h3>
                                <p className="font-medium text-gray-600">
                                    NEW
                                    <br />
                                    LOCATION
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            Our menu features a variety of dishes all made with
                            seasonal ingredients
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-10">
                <div className="grid grid-cols-4 gap-10 text-center">
                    <div>
                        <h3 className="text-6xl font-semibold text-[#F2A64D]">
                            26
                        </h3>
                        <p className="font-medium text-gray-600">
                            YEAR EXPERIENCE
                        </p>
                    </div>
                    <div>
                        <h3 className="text-6xl font-semibold text-[#F2A64D]">
                            100
                        </h3>
                        <p className="font-medium text-gray-600">MENU/DISH</p>
                    </div>
                    <div>
                        <h3 className="text-6xl font-semibold text-[#F2A64D]">
                            50
                        </h3>
                        <p className="font-medium text-gray-600">STAFFS</p>
                    </div>
                    <div>
                        <h3 className="text-6xl font-semibold text-[#F2A64D]">
                            15,000
                        </h3>
                        <p className="font-medium text-gray-600">
                            HAPPY CUSTOMER
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServingCustomer;