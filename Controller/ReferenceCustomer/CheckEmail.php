<?php
/**
 * Created by PhpStorm.
 * User: dmitriy
 * Date: 2020-01-13
 * Time: 13:55
 */
namespace Vaimo\ClemondoMarkGoods\Controller\ReferenceCustomer;

use Magento\Framework\Controller\Result\JsonFactory as ResultJsonFactory;
use Magento\Framework\App\Action\Context;
use Magento\Framework\App\Action\Action;
use Magento\Customer\Api\CustomerRepositoryInterface;

class CheckEmail extends Action
{

    private $resultJsonFactory;

    private $customerRepopsitory;

    public function __construct(
        ResultJsonFactory $resultJsonFactory,
        CustomerRepositoryInterface $customerRepository,
        Context $context
    ) {
        $this->resultJsonFactory = $resultJsonFactory;
        $this->customerRepopsitory = $customerRepository;
        parent::__construct($context);
    }

    public function execute()
    {
        $resultJson = $this->resultJsonFactory->create();
        $email = $this->getRequest()->getParam('email');
        if($email){
            try {
                $customer = $this->customerRepopsitory->get($email);
                if($customer) {
                    return $resultJson->setData(true);
                }
            }catch (\Exception $exception) {
                return $resultJson->setData(false);
            }
        }
        return $resultJson->setData(false);
    }
}