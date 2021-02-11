#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import {VPC} from '../lib/vpc-stack';
import {SG} from '../lib/sg-stack';
import {ASG} from '../lib/asg-stack';
import {ALB} from '../lib/alb-stack';
import { S3 } from '../lib/s3-stack';
import {vpcStackConf, sgStackConf, asgStackConf, albStackConf, s3StackConf } from '../lib/configuration/stacks-conf';


const app = new cdk.App();

//------------------------------------------------------------------------------------------------------------
// *** VIRTUAL PRIVATE CLOUD STACK ***
//------------------------------------------------------------------------------------------------------------
const vpcStack = new VPC(app, vpcStackConf.stackName, {
    env: { 
        region: vpcStackConf.region 
    }
});

//------------------------------------------------------------------------------------------------------------
// *** SECURITY GROUPS STACK ***
//------------------------------------------------------------------------------------------------------------
const sgStack = new SG(app, sgStackConf.stackName, {
    env: { 
        region: sgStackConf.region 
    },

    importedVpc: vpcStack.importedVPC,
});

//------------------------------------------------------------------------------------------------------------
// *** AUTO SCALING GROUP STACK ***
//------------------------------------------------------------------------------------------------------------
const asgStack = new ASG(app, asgStackConf.stackName, {
    env: { 
        region: asgStackConf.region 
    },

    importedVpc: vpcStack.importedVPC,

    importedAsgSecurityGroup: sgStack.appSecurityGroup,

    importedBastionSecurityGroup: sgStack.bastionSecurityGroup
});

//------------------------------------------------------------------------------------------------------------
// *** APPLICATION LOAD BALANCER STACK ***
//------------------------------------------------------------------------------------------------------------
const albStack = new ALB(app, albStackConf.stackName, {
    env: { 
        region: albStackConf.region 
    },

    importedVpc: vpcStack.importedVPC,

    importedAlbSecurityGroup: sgStack.albSecurityGroup,

    importedASG: asgStack.app

});

//------------------------------------------------------------------------------------------------------------
// *** S3 BUCKET STACK ***
//------------------------------------------------------------------------------------------------------------
const s3Stack = new S3(app, s3StackConf.stackName, {
    env: { 
        region: s3StackConf.region 
    },
    
    importedASG: asgStack.app

});

app.synth();
