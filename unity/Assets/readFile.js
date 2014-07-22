#pragma strict

import System.IO;

function Start () {
	var sr = new StreamReader("../data/sample_data.txt");
	var line = sr.ReadLine();
	
	while(line != null){
		print(line);		
		var pos = line.Split(" "[0]);
		var cube : GameObject = GameObject.CreatePrimitive(PrimitiveType.Cube);
		
		cube.transform.position = Vector3(int.Parse(pos[0]),
									      int.Parse(pos[1]),
									      int.Parse(pos[2]));
			
		cube.transform.localScale = Vector3(2, 2, 2);		
		line = sr.ReadLine();
	}
	
	sr.Close();
}

function Update () {
}