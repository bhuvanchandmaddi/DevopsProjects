import java.util.*;

class HashMapDemo{
public static void main(String[] args){
Map<String,Integer> obj = new HashMap<String,Integer>();

obj.put("Bhuvan", 20);
obj.put("Chand", 22);
obj.put("Maddi", 23);


System.out.println(obj);

//Itertae uinsg Iterator objecIterator
Iterator <Map.Entry<String,Integer>> iter=obj.entrySet().iterator();

while(iter.hasNext()){
System.out.println((iter.next()));
}

}
}