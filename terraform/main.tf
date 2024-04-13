module "sqs" {
  source       = "app.terraform.io/RBMH-PF/sqs/aws"
  version      = "1.6.0"
  environment  = "local"
  project      = "test"

  queue_name = "my-test-queue"
}

provider "aws" {

  access_key = "test"
  secret_key = "test"
  region     = "eu-central-1"
  # only required for non virtual hosted-style endpoint use case.
  # https://registry.terraform.io/providers/hashicorp/aws/latest/docs#s3_use_path_style
  s3_use_path_style           = false
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
  endpoints {
    sqs     = "http://localhost:4566"
  }
}