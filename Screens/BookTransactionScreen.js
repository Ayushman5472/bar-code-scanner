import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import { askAsync } from 'expo-permissions';
export default class BookTransactionScreen extends React.Component{
    constructor(){
        super()
        this.state = {
        hasCameraPermissions:'',
        scanned:false,
        scannedData:'',
        buttonState:'normal' 
    }
    }
    handleScanData=async({type,data})=>{
    this.setState({
        scanned:true,
        scannedData:data,
        buttonState:'normal',
    })
    }
   getPermission=async()=>{
   const {status} = await Permissions.askAsync(Permissions.CAMERA)
   this.setState({
       hasCameraPermissions:status==="granted",
        buttonState:'clicked',
        scanned:false    
    })
   } 
    render (){
        if (this.state.buttonState==='clicked'&& this.state.hasCameraPermissions===true){
        return(
            <BarCodeScanner onBarCodeScanned={this.state.scanned===true?undefined:this.handleScanData}/>
        )
        }
else if (this.state.buttonState==='normal'){


        return (
            <View style={styles.container}>
                <Text>
                    {this.state.hasCameraPermissions===true?this.state.scannedData:"Request Camera Permission"}
                    </Text>
                    <TouchableOpacity onPress= {this.getPermission} style = {styles.scanningButton}>
                        <Text style = {styles.buttonText}>
                            Scan QR Code
                            </Text>
                            </TouchableOpacity>
                </View>
        )
        } 
        }
}
const styles = StyleSheet.create ({
    scanningButton:{
    backgroundColor:"black",
    height:200,
    width:300,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:12,
    borderColor:'grey'
    },
    buttonText:{
    color:'white',
    fontSize:30,
    fontStyle:'italic',
    },
    container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    },
})