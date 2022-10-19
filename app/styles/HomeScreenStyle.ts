import { StyleSheet, Dimensions } from "react-native";
import { AppColor } from "../utils/StyleConstant";

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    flatList: {
        height: windowHeight - 200
    },
    tableHeader: {
        backgroundColor: AppColor.grey,
        borderWidth: 2

    },
    tableData: {
        borderWidth: 2,
        // backgroundColor: 'red'
    }
});