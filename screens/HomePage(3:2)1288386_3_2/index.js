import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_3_7} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00c8309b-675a-4992-87f4-bc2f0f476837"
        }}
        style={styles.ImageBackground_3_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a746ffe-5560-4a53-bb6c-66c377f8bb3d"
        }}
        style={styles.ImageBackground_4_21}
      />
      <View style={styles.View_6_40}>
        <View style={styles.View_6_26}>
          <Text style={styles.Text_6_26}>Scooter</Text>
        </View>
        <View style={styles.View_6_27}>
          <Text style={styles.Text_6_27}>Ather Grid</Text>
        </View>
        <View style={styles.View_6_28}>
          <Text style={styles.Text_6_28}>Story</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58f80050-f6ed-4036-ad91-e85d78d4266a"
        }}
        style={styles.ImageBackground_6_32}
      />
      <View style={styles.View_6_39}>
        <View style={styles.View_6_33}>
          <Text style={styles.Text_6_33}>Introduction</Text>
        </View>
        <View style={styles.View_6_34}>
          <Text style={styles.Text_6_34}>Intelligence</Text>
        </View>
        <View style={styles.View_6_35}>
          <Text style={styles.Text_6_35}>Performance</Text>
        </View>
        <View style={styles.View_6_36}>
          <Text style={styles.Text_6_36}>Charging</Text>
        </View>
        <View style={styles.View_6_38}>
          <Text style={styles.Text_6_38}>Pricing</Text>
        </View>
      </View>
      <View style={styles.View_6_41} />
      <View style={styles.View_6_42} />
      <View style={styles.View_6_43}>
        <Text style={styles.Text_6_43}>Test ride</Text>
      </View>
      <View style={styles.View_6_44}>
        <Text style={styles.Text_6_44}>Book Now</Text>
      </View>
      <View style={styles.View_3_10}>
        <Text style={styles.Text_3_10}>
          🎉 Enjoy Ather Connect Pro &amp; Ather Grid for free, until 31st Dec
          2022 Learn more
        </Text>
      </View>
      <View style={styles.View_8_47}>
        <Text style={styles.Text_8_47}>Goodbye scooter. Meet Ather 450X.</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb423cbc-61a7-452b-8e0b-2aa1c97604fa"
        }}
        style={styles.ImageBackground_6_46}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(226, 226, 226, 1)" },
  View_2: { height: hp("137%") },
  View_3_7: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_3_19: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  ImageBackground_4_21: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    resizeMode: "cover"
  },
  View_6_40: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_26: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_6_26: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_27: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_6_27: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_28: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_6_28: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_32: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("12%")
  },
  View_6_39: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_33: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_6_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_34: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_6_34: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_35: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_6_35: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_36: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_6_36: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_38: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_6_38: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_41: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("22%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0,
    borderColor: "rgba(25, 25, 25, 1)",
    borderWidth: 1
  },
  View_6_42: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("22%"),
    backgroundColor: "rgba(25, 25, 25, 1)"
  },
  View_6_43: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_6_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_44: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_6_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_10: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_3_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_47: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_8_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 60,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_46: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("51%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
