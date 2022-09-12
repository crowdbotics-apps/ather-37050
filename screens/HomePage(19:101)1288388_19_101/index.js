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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d0f9c73-8a64-4fed-87b8-ab22743131e5"
        }}
        style={styles.ImageBackground_19_102}
      />
      <View style={styles.View_19_103}>
        <Text style={styles.Text_19_103}>
          Goodbye scooter. Meet Ather 450X.
        </Text>
      </View>
      <View style={styles.View_19_104} />
      <View style={styles.View_19_105}>
        <Text style={styles.Text_19_105}>
          🎉 Enjoy Ather Connect Pro &amp; Ather Grid for free, until 31st Dec
          2022 Learn more
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cef23e0-a05b-421a-ad04-e7e3b4a29872"
        }}
        style={styles.ImageBackground_19_106}
      />
      <View style={styles.View_19_107}>
        <Text style={styles.Text_19_107}>Connected Scooter</Text>
      </View>
      <View style={styles.View_19_108}>
        <Text style={styles.Text_19_108}>
          Never take your phone out when you ride.
        </Text>
      </View>
      <View style={styles.View_19_109}>
        <Text style={styles.Text_19_109}>
          A 17.78 cm (7&quot;) LCD display for everything you need to see on
          your ride - from navigation to incoming calls to nearest charging
          points.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_19_110}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_48"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f28f9c0-08b7-4a94-9a82-c1a9bf7b591d"
          }}
          style={styles.ImageBackground_19_134}
        />
        <View style={styles.View_19_135}>
          <Text style={styles.Text_19_135}>Connected Scooter</Text>
        </View>
        <View style={styles.View_19_136}>
          <Text style={styles.Text_19_136}>
            Never take your phone out when you ride.
          </Text>
        </View>
        <View style={styles.View_19_137}>
          <Text style={styles.Text_19_137}>
            A 17.78 cm (7&quot;) LCD display for everything you need to see on
            your ride - from navigation to incoming calls to nearest charging
            points.
          </Text>
        </View>
        <View style={styles.View_19_142} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d0ce270-c227-45b1-87c9-1e97171838d3"
          }}
          style={styles.ImageBackground_19_143}
        />
        <View style={styles.View_19_144} />
      </TouchableOpacity>
      <View style={styles.View_19_111} />
      <View style={styles.View_19_112}>
        <View style={styles.View_19_113}>
          <Text style={styles.Text_19_113}>Introduction</Text>
        </View>
        <View style={styles.View_19_114}>
          <Text style={styles.Text_19_114}>Intelligence</Text>
        </View>
        <View style={styles.View_19_115}>
          <Text style={styles.Text_19_115}>Performance</Text>
        </View>
        <View style={styles.View_19_116}>
          <Text style={styles.Text_19_116}>Charging</Text>
        </View>
        <View style={styles.View_19_117}>
          <Text style={styles.Text_19_117}>Pricing</Text>
        </View>
      </View>
      <View style={styles.View_19_118} />
      <View style={styles.View_19_119} />
      <View style={styles.View_19_120}>
        <Text style={styles.Text_19_120}>Test ride</Text>
      </View>
      <View style={styles.View_19_121}>
        <Text style={styles.Text_19_121}>Book Now</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ef2bd15-8bc1-43b9-b8b2-fd877a91c7b5"
        }}
        style={styles.ImageBackground_19_122}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e04a3c59-6fcf-4cc8-8e47-7c4d2c334931"
        }}
        style={styles.ImageBackground_19_123}
      />
      <View style={styles.View_19_124}>
        <View style={styles.View_19_125}>
          <Text style={styles.Text_19_125}>Scooter</Text>
        </View>
        <View style={styles.View_19_126}>
          <Text style={styles.Text_19_126}>Ather Grid</Text>
        </View>
        <View style={styles.View_19_127}>
          <Text style={styles.Text_19_127}>Story</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b6b68ff-309c-478d-a6d5-5dede0f7f52a"
        }}
        style={styles.ImageBackground_19_128}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("498%") },
  ImageBackground_19_102: {
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
  View_19_103: {
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
  Text_19_103: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 60,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_104: {
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
  View_19_105: {
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
  Text_19_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_19_106: {
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
  View_19_107: {
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
  Text_19_107: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_108: {
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
  Text_19_108: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_109: {
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
  Text_19_109: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_19_110: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("249%"),
    minHeight: hp("249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("249%"),
    backgroundColor: "rgba(56, 56, 56, 1)",
    overflow: "hidden"
  },
  ImageBackground_19_134: {
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
  View_19_135: {
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
  Text_19_135: {
    color: "rgba(226, 226, 226, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_136: {
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
  Text_19_136: {
    color: "rgba(226, 226, 226, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_137: {
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
  Text_19_137: {
    color: "rgba(226, 226, 226, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_142: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("160%"),
    backgroundColor: "rgba(246, 245, 245, 1)"
  },
  ImageBackground_19_143: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("237%")
  },
  View_19_144: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("159%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_19_111: {
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
  View_19_112: {
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
  View_19_113: {
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
  Text_19_113: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_114: {
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
  Text_19_114: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_115: {
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
  Text_19_115: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_116: {
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
  Text_19_116: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_117: {
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
  Text_19_117: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_118: {
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
  View_19_119: {
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
  View_19_120: {
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
  Text_19_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_121: {
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
  Text_19_121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_19_122: {
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
  ImageBackground_19_123: {
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
  View_19_124: {
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
  View_19_125: {
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
  Text_19_125: {
    color: "rgba(25, 25, 25, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_126: {
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
  Text_19_126: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_127: {
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
  Text_19_127: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_19_128: {
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
