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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b4a80df-6c9c-4c19-9116-9a524d36faa3"
        }}
        style={styles.ImageBackground_8_72}
      />
      <View style={styles.View_8_77}>
        <Text style={styles.Text_8_77}>Goodbye scooter. Meet Ather 450X.</Text>
      </View>
      <View style={styles.View_10_10} />
      <View style={styles.View_10_11}>
        <Text style={styles.Text_10_11}>
          🎉 Enjoy Ather Connect Pro &amp; Ather Grid for free, until 31st Dec
          2022 Learn more
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d11e090b-363a-4705-8a54-baedca092926"
        }}
        style={styles.ImageBackground_17_67}
      />
      <View style={styles.View_19_80}>
        <Text style={styles.Text_19_80}>Connected Scooter</Text>
      </View>
      <View style={styles.View_19_81}>
        <Text style={styles.Text_19_81}>
          Never take your phone out when you ride.
        </Text>
      </View>
      <View style={styles.View_19_82}>
        <Text style={styles.Text_19_82}>
          A 17.78 cm (7&quot;) LCD display for everything you need to see on
          your ride - from navigation to incoming calls to nearest charging
          points.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_19_100}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("19_101"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9870c96-3fb5-4762-9cd1-cbc0e8c77e10"
          }}
          style={styles.ImageBackground_19_138}
        />
        <View style={styles.View_19_139}>
          <Text style={styles.Text_19_139}>Connected Scooter</Text>
        </View>
        <View style={styles.View_19_140}>
          <Text style={styles.Text_19_140}>
            Never take your phone out when you ride.
          </Text>
        </View>
        <View style={styles.View_19_141}>
          <Text style={styles.Text_19_141}>
            A 17.78 cm (7&quot;) LCD display for everything you need to see on
            your ride - from navigation to incoming calls to nearest charging
            points.
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_19_83} />
      <View style={styles.View_8_60}>
        <View style={styles.View_8_61}>
          <Text style={styles.Text_8_61}>Introduction</Text>
        </View>
        <View style={styles.View_8_62}>
          <Text style={styles.Text_8_62}>Intelligence</Text>
        </View>
        <View style={styles.View_8_63}>
          <Text style={styles.Text_8_63}>Performance</Text>
        </View>
        <View style={styles.View_8_64}>
          <Text style={styles.Text_8_64}>Charging</Text>
        </View>
        <View style={styles.View_8_65}>
          <Text style={styles.Text_8_65}>Pricing</Text>
        </View>
      </View>
      <View style={styles.View_8_66} />
      <View style={styles.View_8_67} />
      <View style={styles.View_8_68}>
        <Text style={styles.Text_8_68}>Test ride</Text>
      </View>
      <View style={styles.View_8_69}>
        <Text style={styles.Text_8_69}>Book Now</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/278e53aa-0c52-4d93-8bd8-d876baa64850"
        }}
        style={styles.ImageBackground_8_50}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/017ff813-0e81-4d23-a253-155a4871e915"
        }}
        style={styles.ImageBackground_8_51}
      />
      <View style={styles.View_8_52}>
        <View style={styles.View_8_53}>
          <Text style={styles.Text_8_53}>Scooter</Text>
        </View>
        <View style={styles.View_8_54}>
          <Text style={styles.Text_8_54}>Ather Grid</Text>
        </View>
        <View style={styles.View_8_55}>
          <Text style={styles.Text_8_55}>Story</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cf15296-5272-461a-800c-b6c73234d26c"
        }}
        style={styles.ImageBackground_8_56}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("498%") },
  ImageBackground_8_72: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("29%"),
    resizeMode: "cover"
  },
  View_8_77: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_8_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 60,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_10: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("106%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_10_11: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("132%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_10_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_67: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("78%"),
    minHeight: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("164%"),
    resizeMode: "cover"
  },
  View_19_80: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("133%"),
    justifyContent: "flex-start"
  },
  Text_19_80: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_81: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("139%"),
    justifyContent: "flex-start"
  },
  Text_19_81: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_82: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("141%"),
    justifyContent: "flex-start"
  },
  Text_19_82: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_19_100: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("246%"),
    minHeight: hp("246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("251%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_19_138: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("78%"),
    minHeight: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("52%"),
    resizeMode: "cover"
  },
  View_19_139: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_19_139: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_140: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_19_140: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_141: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_19_141: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_83: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 226, 226, 1)"
  },
  View_8_60: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_61: {
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
  Text_8_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_62: {
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
  Text_8_62: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_63: {
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
  Text_8_63: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_64: {
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
  Text_8_64: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_65: {
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
  Text_8_65: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_66: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("10%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0,
    borderColor: "rgba(25, 25, 25, 1)",
    borderWidth: 1
  },
  View_8_67: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("10%"),
    backgroundColor: "rgba(25, 25, 25, 1)"
  },
  View_8_68: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_8_68: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_69: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_8_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_50: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  ImageBackground_8_51: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_8_52: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_53: {
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
  Text_8_53: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_54: {
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
  Text_8_54: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_55: {
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
  Text_8_55: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_56: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("3%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
