export const loginInitialState = {
    employeeId: "",
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    designation: "",
    joiningDate: "",
    dateOfBirth: "",
    salary: "",
    activeEmployee: "",
    address: "",
};

// Reducer function to update state
export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_INPUT':
            return { ...state, [action.field]: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};


export const InputRegister = [
    {
        id: 1,
        field: 'employeeId',
        label: 'Employee Id',
        keyboardType: 'phone-pad',
        IconCategoryName: "Entypo",
        IconName: "list",
        readOnly: true,

    },
    {
        id: 2,
        field: 'name',
        label: 'Name',
        keyboardType: 'default',
        IconCategoryName: "Entypo",
        IconName: "user",
    },
    {
        id: 3,
        field: 'email',
        label: 'Email',
        keyboardType: 'default',
        IconCategoryName: "Entypo",
        IconName: "email",
    },
    {
        id: 4,
        field: 'phoneNumber',
        label: 'Phone Number',
        keyboardType: 'phone-pad',
        IconCategoryName: "Entypo",
        IconName: "mobile",
    },
    {
        id: 5,
        field: 'password',
        label: 'password',
        keyboardType: 'default',
        IconCategoryName: "Entypo",
        IconName: "lock",
        leftIconName: "fire",
        LeftIconCategoryName: "FontAwesome5"
    },
    {
        id: 6,
        field: 'designation',
        label: 'Designation',
        keyboardType: 'default',
        IconCategoryName: "FontAwesome",
        IconName: "building-o",
        readOnly: true,
    },
    {
        id: 7,
        field: 'joiningDate',
        label: 'Joining Date',
        keyboardType: 'phone-pad',
        IconCategoryName: "Fontisto",
        IconName: "date",
        readOnly: true,
    },
    {
        id: 8,
        field: 'dateOfBirth',
        label: 'Date Of Birth',
        keyboardType: 'phone-pad',
        IconCategoryName: "Fontisto",
        IconName: "date",
    },
    {
        id: 9,
        field: 'salary',
        label: 'Salary',
        keyboardType: 'phone-pad',
        IconCategoryName: "MaterialIcons",
        IconName: "attach-money",
        readOnly: true,
    },
    {
        id: 10,
        field: 'activeEmployee',
        label: 'Active Employee',
        keyboardType: 'default',
        IconCategoryName: "Fontisto",
        IconName: "radio-btn-active",
        leftIconName: "fire",
        LeftIconCategoryName: "FontAwesome5"
    },
    {
        id: 11,
        field: 'address',
        label: 'Address',
        keyboardType: 'default',
        IconCategoryName: "Entypo",
        IconName: "address",
    },

]