public class MyFIRSTJavaOpMode extends LinearOpMode {
	DcMotor motorLeft;
	DcMotor motorRight;
	DcMotor frontLeft;
	DcMotor frontRight;
	ColorSensor color1;
	DistanceSensor distance1;
	BNO055IMU imu;
	
	@Override
	public void runOpMode() {
		motorLeft = hardwareMap.get(DcMotor.class, "motorLeft");
		motorRight = hardwareMap.get(DcMotor.class, "motorRight");
		frontLeft = hardwareMap.get(DcMotor.class, "frontLeft");
		frontRight = hardwareMap.get(DcMotor.class, "frontRight");
		color1 = hardwareMap.get(ColorSensor.class, "color1");
		distance1 = hardwareMap.get(DistanceSensor.class, "distance1");
		imu = hardwareMap.get(BNO055IMU.class, "imu");
	
        
	
		
			//Drive Forward
            motorLeft.setDirection(DcMotor.Direction.REVERSE);

            motorLeft.setPower(0.5);
            motorRight.setPower(-0.5);
            sleep(900);

            motorLeft.setPower(0.8);
            motorRight.setPower(0.8);
            sleep(1400);

            motorLeft.setPower(-0.5);
            motorRight.setPower(0.5);
            sleep(1100);

            motorLeft.setPower(0.8);
            motorRight.setPower(0.8);
            sleep(1400);


            motorLeft.setPower(0);
            motorRight.setPower(0);
            
			
		
	}
	
	
}
