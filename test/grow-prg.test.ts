import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as BaseStack from '../lib/base-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new BaseStack.BaseStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});

// import { Stack, App } from '@aws-cdk/core';
// import cdk = require('@aws-cdk/core');
// import * as VPC from '../lib/vpc-stack';
// // import SG = require('../lib/sg-stack');
// import {SG} from '../lib/sg-stack';
// import {ASG} from '../lib/asg-stack';
// import {ALB} from '../lib/alb-stack';
// import { S3 } from '../lib/s3-stack'; 
// import {vpcStackConf, sgStackConf, asgStackConf, albStackConf, s3StackConf } from '../lib/configuration/stacks-conf';
// import { expect as expectCDK, MatchStyle, matchTemplate, haveResourceLike } from '@aws-cdk/assert'; 
// import { Vpc } from '@aws-cdk/aws-ec2';


 
// let stack: Stack; 
// const app = new App(); 

// beforeAll(() => { 

//   const stack = new SG(app, 'Test', );
// }); 

// test('ASG is created', () => {  
//   expectCDK(stack).to(haveResourceLike('AWS::AutoScaling::AutoScalingGroup')); 
// } ); 
 
// test('ALB is created', () => {  
//   expectCDK(stack).to(haveResourceLike('AWS::ElasticLoadBalancingV2::LoadBalancer')); 
// } ); 


// import { Stack, App } from '@aws-cdk/core';
// import cdk = require('@aws-cdk/core');
// import 'source-map-support/register';
// import {VPC} from '../lib/vpc-stack';
// import {SG} from '../lib/sg-stack';
// // import * as SG from '../lib/sg-stack';
// import {ASG} from '../lib/asg-stack';
// import {ALB} from '../lib/alb-stack';
// import { S3 } from '../lib/s3-stack';
// import {vpcStackConf, sgStackConf, asgStackConf, albStackConf, s3StackConf } from '../lib/configuration/stacks-conf';
// import { expect as expectCDK, MatchStyle, matchTemplate, haveResourceLike } from '@aws-cdk/assert'; 
// import { Vpc } from '@aws-cdk/aws-ec2';


// const app = new cdk.App();

// //------------------------------------------------------------------------------------------------------------
// // *** VIRTUAL PRIVATE CLOUD STACK ***
// //------------------------------------------------------------------------------------------------------------
// let vpcStack: Stack; 

// beforeAll(() => { 

//   const vpcStack = new VPC(app, vpcStackConf.stackName, {
//     env: { 
//         region: vpcStackConf.region 
//     }
// });
// }); 

// test('VPC', () => {  
//   expectCDK(vpcStack).to(haveResourceLike('AWS::EC2::VPC')); 
// } ); 
 
// test('Subnet', () => {  
//   expectCDK(vpcStack).to(haveResourceLike('AWS::EC2::Subnet')); 
// } );

// //------------------------------------------------------------------------------------------------------------
// // *** VIRTUAL PRIVATE CLOUD STACK ***
// //------------------------------------------------------------------------------------------------------------
// let sgStack: Stack; 

// beforeAll(() => { 

//   const sgStack = new SG(app, sgStackConf.stackName, {
//     env: { 
//         region: sgStackConf.region 
//     },

  
//     importedVpc: vpcStack.importedVPC,
// });
// });

// test('VPC', () => {  
//   expectCDK(sgStack).to(haveResourceLike('AWS::EC2::VPC')); 
// } ); 
 
// test('Subnet', () => {  
//   expectCDK(sgStack).to(haveResourceLike('AWS::EC2::Subnet')); 
// } );