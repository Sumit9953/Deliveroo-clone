import { Image } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from "twrnc";
import { urlFor } from '../sanity';


const CategoriesCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity style={tw`relative mr-2`}>
      <Image style={tw`h-20 w-20 rounded`} source={{
        uri: urlFor(imgUrl).url(),
      }} />
      <Text style={tw`absolute bottom-1 left-1 text-white font-bold `}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard