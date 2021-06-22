var nums = [1,2,3,4,5];

function array_square(a)
{
  for(var i=0;i<a.length;i++)
  {
    a[i]=a[i]*a[i]
  }
  console.log(a)
}

function setup() {
  createCanvas(400, 400);
  array_square(nums)
}

function draw() {
  background(220);
}